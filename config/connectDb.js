import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
});

let db = mongoose.connection;

export default db;
