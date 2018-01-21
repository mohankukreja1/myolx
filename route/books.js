const route=require('express').Router()
const books=require('../db/models').book
route.get('/',(req,res)=>{
    books.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}