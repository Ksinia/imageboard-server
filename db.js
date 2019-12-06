const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:yn9hrm8uuwt949@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);
db.sync()
  .then(console.log("Database loaded"))
  .catch(console.error);

module.exports = db;
