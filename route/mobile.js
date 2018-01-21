const route=require('express').Router()
const pets=require('../db/models').pets
route.get('/',(req,res)=>{
    pets.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}