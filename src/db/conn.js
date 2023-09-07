const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017',{
    dbName : 'Todo-DB',
    useNewUrlParser: true
}).then((res)=>{
    console.log('DB is Working')
}).catch((err)=>{
    console.log(err)
})
