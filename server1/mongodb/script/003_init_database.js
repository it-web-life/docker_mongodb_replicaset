/**
 * Collection作成 (必要に応じて)
 */
const databaseName = 'test_db';
const collectionName = 'test_collection'

const coredb = db.getSiblingDB(databaseName);
coredb.createCollection(collectionName);
