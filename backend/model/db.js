const Sequelize = require('sequelize')
const Keys = require('../keys')

const sequelize = new Sequelize(Keys.PG_USER, Keys.PG_DATABASE, Keys.PG_PASSWORD, {
    host: Keys.PG_HOST,
    dialect: Keys.PG_DIALECT
})

module.exports = sequelize