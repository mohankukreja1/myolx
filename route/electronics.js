const route=require('express').Router()
const electonics=require('../db/models').electronics
route.get('/',(req,res)=>{
    electonics.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}