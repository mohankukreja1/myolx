const express=require('express')
const path=require('path')

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(path.join(__dirname,'frontend')))


app.listen(2222,()=>{
    console.log('server started at port 2222');
})