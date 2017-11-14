const mongoose = require('mongoose');
const config = require('../sql_conf.json').mongo;

mongoose.Promise = global.Promise;

mongoose.connect(config.url, {
  useMongoClient: true
}, (err) => {
  if (err) {
    console.log(`connect to %s error: `, config.url, err.message);
    process.exit(1);
  }
  console.log("succefullly");
})


exports.grade = require('./lib/grade');