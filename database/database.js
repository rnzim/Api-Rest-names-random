const Sequelize = require('sequelize')

const connection = new Sequelize('names','root','',{
    dialect:'mysql',
    host:'localhost',
    timezone:'-03:00'
})

module.exports = connection