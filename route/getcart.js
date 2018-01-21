const route=require('express').Router()
const cart=require('../db/models').cart
route.get('/',(req,res)=>{
    cart.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}