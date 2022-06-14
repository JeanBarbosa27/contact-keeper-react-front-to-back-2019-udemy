const config = require('config');
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('Connect successfully to mongodb')

  } catch (error) {
    console.error('Error when trying to connect to mongodb: ', error.message);
  }
}

module.exports = connectDB;
