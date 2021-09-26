const mongoose = require("mongoose");
const url =
  process.env.NODE_ENV !== "production"
    ? process.env.DEV_MONGO_URL
    : process.env.PROD_MONGO_URL;

const db = mongoose
  .connect(url, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the mongodb database");
  })
  .catch((error) => {
    console.log(error.name);
    console.log(error);
    console.log(process.env.DEV_MONGO_URL);
    console.log(process.env.PROD_MONGO_URL);
  });

module.exports = db;
