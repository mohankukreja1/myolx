const route=require('express').Router()
const jobs=require('../db/models').jobs
route.get('/',(req,res)=>{
    jobs.findAll({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=exports={
    route
}