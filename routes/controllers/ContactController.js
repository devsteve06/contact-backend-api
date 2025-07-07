//handles the business logic

//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res)=>{
     res.status(200).json({msg : "this is the endpoint for all contacts"})
}

//@desc creates new contacts
//@route POST /api/contacts/
//@access public
const createContact = (req,res)=>{

     //error handling for client-side requests
     const {username, email, phone} =req.body
     if (!username || !email || !phone){
          res.status(400);
          throw new Error("all fields are required.");
          
     }else{
                console.log('the request body is : ',req.body);
     res.status(201).json({msg : "created a new contact"})
     }
    
}

//@desc gets a contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res)=>{
     res.status(200).json({msg : `Obtained contact ${req.params.id}`})
}
//@desc updates a contact
//@route PUT /api/contacts
//@access public
const updateContact = (req,res)=>{
     res.status(200).json({msg : `updated contact ${req.params.id}`})
}

//@desc removes a contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req,res)=>{
     res.status(200).json({msg :`removed contact ${req.params.id}` })
}


module.exports = {getContacts, getContact, createContact,updateContact, deleteContact}