// index.js
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.tblcounters =require("./tblcounters.model.js")(sequelize, Sequelize);
db.tbljobcards_archives =require("./bljobcards_archive.model.js")(sequelize, Sequelize);
db.tblmachines =require("./tblmachines.model.js")(sequelize, Sequelize);
db.tblmachines_tran =require("./tblcounters_tran.model.js")(sequelize, Sequelize);
db.tblmanagers =require("./tblmanagers.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);

// Sync the database
db.sequelize
  // .sync({ force: true })
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

module.exports = db;
