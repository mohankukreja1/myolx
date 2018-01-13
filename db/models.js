const sequelize=require('sequelize')
const datatypes=sequelize.DataTypes

const db=new sequelize('olx','olxuser','olxpass',{
    host:'localhost',
    dialect:'mysql'
})

