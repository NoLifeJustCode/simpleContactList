const mongoose=require('mongoose')
const schema=mongoose.Schema
const contactSchema=new schema({
        name:{
            type:String,
            required:true,
        },
        number:{
            type:String,
            required:true,
            unique:true,
        }
},{timestamps:true})

contactSchema.path('number').validate(function(email){
    var emailRegex=(/[1-9]{2}\d{8}/);
    return emailRegex.test(email)
},'phone validation failed')
module.exports=mongoose.model('Contacts',contactSchema)