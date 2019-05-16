// get the client
const Sequelize = require('sequelize')

// Create the connection pool. The pool-specific settings are the defaults
const sequelize = new Sequelize('IT_Reports', 'root', '2000meters', {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize