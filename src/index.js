const express = require('express'); // Require Express
const cors = require('cors'); // Remove cors error
require('./db/conn') //Add connection DB
const app =  express();
const  Port = process.env.port || 8000; //Port where use API route



app.use(express.json())
app.use(
    cors({
        origin:'*',methods:['GET','POST','PUT','PATCH','DELETE']
    })
)
app.use(require('./routes/listRoutes'));


app.get('/',async(req,res)=>{
res.send('Working Backend')
});
app.listen(Port,async()=>{ console.log('Connected')})
