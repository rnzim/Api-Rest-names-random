const connection = require('./database')
const Sequelize = require('sequelize')

const Names = connection.define('names',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Names.sync({force: false})
module.exports = Names