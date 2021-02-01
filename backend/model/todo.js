const sequelize = require('./db')
const { DataTypes } = require('sequelize');

const Todo = sequelize.define('Todo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    todo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Todo