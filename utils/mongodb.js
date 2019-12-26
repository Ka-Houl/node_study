const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://Kahoul:YJvooDen5F4EFkDU@cluster0-5pqtq.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then(client => {
      console.log("连接数据库成功mongodb1");
      _db = client.db();
      callback(client);
    })
    .catch(err => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw "没有发现数据库";
  }
};

module.exports = mongoConnect;
// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
