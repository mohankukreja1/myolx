const route=require('express').Router()
const fashion=require('../db/models').fashion
route.get('/',(req,res)=>{
    fashion.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}