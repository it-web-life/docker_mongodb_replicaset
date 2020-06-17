/**
 * レプリカセットを構築する
 */
rs.initiate({
    _id : "replset",
    members: [
      { _id: 0, host: "mongodb_primary:27017" },
      { _id: 1, host: "mongodb_secondary:27018" },
      { _id: 2, host: "mongodb_arbiter:27019", arbiterOnly: true }
    ]
  }
);
