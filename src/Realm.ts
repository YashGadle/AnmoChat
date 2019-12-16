import Realm from 'realm';

export class User {
  static schemaName = 'User';
  static schema = {
    name: User.schemaName,
    primaryKey: 'alias',
    properties: {
      alias: 'string',
      password: 'string',
    },
  }
  alias: string;
  password: string;
}

export const realm = new Realm({ schema: [User] });