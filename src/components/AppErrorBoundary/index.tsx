import React from 'react';

interface State {
	errorFallback: boolean;
}

class AppErrorBoundary extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			errorFallback: false
		};
	}

	static getDerivedStateFromError(error: Error) {
		return { errorFallback: true };
	}

	componentDidCatch(error: any, info: any) {
		console.log(error, info);
	}

	render() {
		if (this.state.errorFallback) {
			return <h2>There was some error. Please restart the app?</h2>;
		} else {
			return this.props.children;
		}
	}
}

export default AppErrorBoundary;
