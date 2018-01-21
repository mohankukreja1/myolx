const route=require('express').Router()
const cars=require('../db/models').car
route.get('/',(req,res)=>{
    cars.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}