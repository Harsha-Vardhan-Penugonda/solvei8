const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('traini8_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
