const express=require('express')
const router=express.Router()
const contactController=require('../../controller/contactController')

router.get('/',contactController.home)
router.post('/create-contact',contactController.createContact)
router.post('/update-contact/:id',contactController.updateContact)
router.get('/delete-contact/:id',contactController.deleteContact)

module.exports=router