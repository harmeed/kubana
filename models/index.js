const dbConfig = require("../db/database");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
  // declaring pool is optional
  //  pool: {
  //  max: dbConfig.pool.max,
  //  min: dbConfig.pool.min,
  //  acquire: dbConfig.pool.acquire,
  //  idle: dbConfig.pool.idle
  //  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.shortlets = require("./shortlets.model")(sequelize, Sequelize);
db.book = require("./book.model")(sequelize, Sequelize);

module.exports = db;
