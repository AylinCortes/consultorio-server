const Sequelize = require("sequelize");
require("dotenv").config();

const conn = new Sequelize(
  `${DB_URI}`,
  //`postgres://${process.env.dbUser}:${process.env.dbUserPwd}@35.202.118.198:5432/consultorio`,
  {
    logging: (...msg) => console.log(msg),
    // logging: false,
  }
);

module.exports = conn;
