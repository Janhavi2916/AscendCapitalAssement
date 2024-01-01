const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('janhavi', 'jsp', 'jsp123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;

