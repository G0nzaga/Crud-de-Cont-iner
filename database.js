const Sequelize = require('sequelize');

const connection = new Sequelize('praticando', 'root', 'Gonzaga2904#$$', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = connection;