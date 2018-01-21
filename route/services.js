const route=require('express').Router()
const services=require('../db/models').services
route.get('/',(req,res)=>{
    services.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}