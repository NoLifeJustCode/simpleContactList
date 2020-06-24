const express=require('express')
const app=express()
const port=3000
const mongoose=require('./config/mongoose')

app.use('/assets',express.static('./assets'))
app.use(express.urlencoded())
app.use('/',require('./routes/contacts/index'))
app.listen(port,function(err){
    if(err){
        console.log(err)
    }
    console.log("Server running")
})
app.get('/',function(req,res){
    console.log("url")
    return res.send()
})
