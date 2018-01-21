const route=require('express').Router()
const pets=require('../db/models').pets
const multer = require('multer');
const path=require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadimages')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage }).single('pic');

route.get('/',(req,res)=>{
    pets.findAll({}).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
})

route.post('/',(req,res)=>{
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return;
        }
    pets.create({
        maininfo:req.body.maininfo,
        addinfo:req.body.addinfo,
        phone:req.body.phone,
        price:req.body.price,
        image: `uploadimages/${req.file.filename}`

    }).then((re)=>{
        res.redirect('/pets')
    }).catch((err)=>{
        console.log(err);
    })
})

});

module.exports=exports={
    route
}