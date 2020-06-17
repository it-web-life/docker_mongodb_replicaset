/**
 * admin管理者登録
 */
const coredb = db.getSiblingDB('admin');

coredb.createUser({
  user: 'admin_user',
  pwd: 'admin_password',
  roles: [
    'userAdminAnyDatabase',
    'dbAdminAnyDatabase',
    'clusterAdmin'
  ]
});
