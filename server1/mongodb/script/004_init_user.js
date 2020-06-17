/**
 * 一般ユーザを作成
 */
const databaseName = 'test_db';
const coredb = db.getSiblingDB(databaseName);

coredb.createUser({
  user: 'user',
  pwd: 'user_password',
  roles: [
    { role: 'readWrite', db: databaseName }
  ]
});
coredb.getUsers();
