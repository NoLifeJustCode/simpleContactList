const mongoose=require('mongoose')
const host="mongodb://localhost:27017/contact_db"
mongoose.connect(host,{
    useNewUrlParser:true,
})

const db=mongoose.connection
db.once('connect',function(){
    console.log("mongoose connection success")
})
db.on('error',function(e){
    console.error.bind(console,e)
})
module.exports=db