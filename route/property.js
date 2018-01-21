const route=require('express').Router()
const property=require('../db/models').property
route.get('/',(req,res)=>{
    property.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}