import React from 'react';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Operation } from 'apollo-boost';
import { ApolloLink, Observable, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import { ACCESS_DENIED } from '../../constants/Errors';

function getToken() {
	try {
		const token = JSON.parse(localStorage.getItem('gotrue.user')).token
			.access_token;
		return token;
	} catch (err) {
		return '';
	}
}

export const ApolloProviderCustom: React.FC<{ token: string }> = props => {
	const { children } = props;

	// let wsLink: WebSocketLink;
	// let httpLink: HttpLink;
	// let link: ApolloLink;
	// let cache: InMemoryCache;
	// let request: (operation: Operation) => void;
	// let requestLink: ApolloLink;

	const wsLink = new WebSocketLink({
		uri: process.env.REACT_APP_API_WS,
		options: {
			reconnect: true,
			connectionParams: {
				headers: {
					'content-type': 'application/json',
					Authorization: 'Bearer ' + getToken()
				}
			}
		}
	});

	const httpLink = new HttpLink({
		uri: `${process.env.REACT_APP_API_URL}`,
		credentials: 'include'
	});

	const link = split(
		// split based on operation type
		({ query }) => {
			const definition = getMainDefinition(query);
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'subscription'
			);
		},
		wsLink,
		httpLink
	);

	const cache = new InMemoryCache({
		dataIdFromObject: object => object.id,
		addTypename: true
	});

	const request = (operation: Operation) => {
		operation.setContext({
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + getToken()
			}
		});
	};

	const requestLink = new ApolloLink(
		(operation, forward) =>
			new Observable(observer => {
				let handle: ZenObservable.Subscription;
				Promise.resolve(operation)
					.then(oper => request(oper))
					.then(() => {
						handle = forward(operation).subscribe({
							next: observer.next.bind(observer),
							error: observer.error.bind(observer),
							complete: observer.complete.bind(observer)
						});
					})
					.catch(observer.error.bind(observer));

				return () => {
					if (handle) handle.unsubscribe();
				};
			})
	);

	const client = new ApolloClient({
		link: ApolloLink.from([
			onError(({ graphQLErrors, networkError }) => {
				console.log(graphQLErrors, networkError);

				if (graphQLErrors) {
					for (let e of graphQLErrors) {
						if (e.extensions.code === ACCESS_DENIED) {
							console.log(e);
						}
					}
				} else if (networkError) {
					console.log(networkError);
				}
			}),
			requestLink,
			withClientState({
				defaults: {
					snackbarShow: false,
					snackbarMessage: ''
				},
				resolvers: {},
				cache
			}),
			link
		]),
		cache
	});

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
