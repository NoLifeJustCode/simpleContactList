const contact=require('../models/contacts')
module.exports.home=async function(req,res){
    try{    console.log("request ")
            var doc=await contact.find()
            
            return res.render('home.ejs',{contacts:doc})
    }catch(e){
        console.log(e)
        res.redirect('back')
    }

}

module.exports.createContact=async function(req,res){
    try{
        console.log("creating contact")
        var doc=await contact.create(req.body)
        console.log(doc)
        return res.redirect('back')
    }catch(e){
        console.log(e)
        return res.redirect('back')
    }
}
module.exports.deleteContact=async function(req,res){
    try{
            var doc=await contact.findByIdAndDelete(req.params.id)
            return res.redirect('back')
    }catch(e){
        console.log(e)
        res.redirect('back')
    }
}
module.exports.updateContact=async function(req,res){
    try{
            var doc=await contact.findByIdAndUpdate(req.params.id,{
                name:req.body.name,
                number:req.body.number
            },{
                upsert:true,
                runValidators:true
            })
            return res.redirect('back')
    }catch(e){
        console.log(e)
        res.redirect('back')
    }
}