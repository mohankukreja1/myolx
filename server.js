const express=require('express')
const path=require('path')

const propetyroute=require('./route/property').route
const carroute=require('./route/car').route
const elecroute=require('./route/electronics').route
const jobsroute=require('./route/jobs').route
const  mobroute=require('./route/mobile').route
const bikeroute=require('./route/bikes').route
const bookroute=require('./route/books').route
const fashionroute=require('./route/fashion').route
const petroute=require('./route/pets').route
const serviceroute=require('./route/services').route
const divroute=require('./route/divroute').route
const cart=require('./route/cart').route
const getcart=require('./route/getcart').route
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

app.use('/',express.static(path.join(__dirname,'frontend')))
app.use('/property',propetyroute);
app.use('/car',carroute);
app.use('/electronics',elecroute);
app.use('/jobs',jobsroute);
app.use('/mobile',mobroute);
app.use('/bike',bikeroute);
app.use('/book',bookroute);
app.use('/fashion',fashionroute);
app.use('/pets',petroute);
app.use('/services',serviceroute);
app.use('/div',divroute);
app.use('/addtocart',cart);
app.use('/gettocart',getcart);

app.listen(2222,()=>{
    console.log('server started at port 2222');
})
