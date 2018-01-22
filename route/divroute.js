const route=require('express').Router()
const multer = require('multer');
const path=require('path');
const property=require('../db/models').property
const car=require('../db/models').car
const electronics=require('../db/models').electronics
const jobs=require('../db/models').jobs
const mobile=require('../db/models').mobiles
const bike=require('../db/models').bike
const book=require('../db/models').book
const fashion=require('../db/models').fashion
const pets=require('../db/models').pets
const services=require('../db/models').services


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadimages')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage }).single('pic');

route.post('/',(req,res)=> {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return;
        }

        if(req.body.type=="Property"){
            property.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Cars"){
            car.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Electronic appliances"){
            electronics.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Jobs"){
            jobs.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                salary: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Mobiles"){
            mobile.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Bikes"){
            bike.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Books"){
            book.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Fashion"){
            fashion.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Pets"){
            pets.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }
        if(req.body.type=="Services"){
            electronics.create({
                maininfo: req.body.maininfo,
                addinfo: req.body.addinfo,
                phone: req.body.phone,
                price: req.body.price,
                image: `uploadimages/${req.file.filename}`

            }).then((re) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }


    })
});
route.get('/',(req,res)=> {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return;
        }
        if(req.query.select=="Property"){
            property.findAll({
                where:{
                    maininfo:`${req.query.search}`
                }
            }).then((result)=>{
                console.log(result)
                res.render('search',{
                    result:result
                });
            }).catch((err)=>{
                console.log(err);
            })
        }

    })
});
exports=module.exports={
    route
}

