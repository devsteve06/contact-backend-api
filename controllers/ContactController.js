//handles the business logic

const asyncHandler = require("express-async-handler")
const contactModel = require("../models/contactModel")

//@desc get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req,res)=>{
     const contacts = await contactModel.find({user_id : req.user.id});
     res.status(200).json(contacts)
}) 

//@desc creates new contacts
//@route POST /api/contacts/
//@access private
const createContact = asyncHandler( async (req,res)=>{

     //error handling for client-side requests
     const {name, email, phone} =req.body //object destructuring 

     if (!name || !email || !phone){
          res.status(400);
          throw new Error("all fields are required.");
          
     }
      console.log('the request body is : ',req.body);
      const contact = await contactModel.create({
          name,
           email,
          phone,
          user_id : req.user.id
          })
      res.status(201).json(contact) 
     
})

//@desc gets a contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler( async(req,res)=>{
     //error handling for client-side requests
     console.log('the request params are : ',req.params.id);
     
     const contact = await contactModel.findById(req.params.id)
     if (!contact) {
          res.status(404);
          throw new Error("contact not found");
     }
     res.status(200).json(contact)
     
    
})
//@desc updates a contact
//@route PUT /api/contacts
//@access private
const updateContact = asyncHandler( async(req,res)=>{
     const updatedContact = await contactModel.findByIdAndUpdate(
          req.params.id,
          req.body,
          {new : true}
     )

     if (!updatedContact) {
          res.status(404);
          throw new Error("contact not found");
     }
     res.status(200).json(updatedContact)
}
)

//@desc removes a contact
//@route DELETE /api/contacts
//@access private
const deleteContact = asyncHandler( async(req,res)=>{
      const contact = await contactModel.findByIdAndDelete(req.params.id)
     if (!contact) {
          res.status(404);
          throw new Error("contact not found");
     }

     res.status(200).json(contact)
})


module.exports = {getContacts, getContact, createContact,updateContact, deleteContact}