const { MongoClient } = require('mongodb');
const { config } = require('../config');

const DB_USER = encodeURIComponent(config.dbUser);
const DB_PASSWARE = encodeURIComponent(config.dbPassware);
const DB_NAME = config.dbName;

const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWARE}@${config.dbHost}:${config.bdPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URL, { useNewUrlParser: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          }
          console.info('connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }
}

module.exports = MongoLib;