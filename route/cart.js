const route=require('express').Router()
const multer = require('multer');
const cart=require('../db/models').cart
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
        cart.create({
            maininfo:req.body.obj.maininfo,
            addinfo:req.body.obj.addinfo,
            phone:req.body.obj.phone,
            price:req.body.obj.price,
            salary:req.body.obj.salary,
            image:req.body.obj.image,
            type:req.body.type

        }).then((result)=>{
            res.redirect('.');
        }).catch((err)=>{
            console.log(err);
        })
    })
});


module.exports=exports={
    route
}