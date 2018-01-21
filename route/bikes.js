const route=require('express').Router()
const bikes=require('../db/models').bike
route.get('/',(req,res)=>{
    bikes.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}