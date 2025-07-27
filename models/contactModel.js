const { type } = require('express/lib/response')
const mongoose = require('mongoose')

//contact schema 
const contactSchema = mongoose.Schema({
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    name :{
        type : String,
        required :[true,"Please enter a contact name"]
    },
     email :{
        type : String,
        required :[true,"Please enter a contact email"]
    },
     phone :{
        type : String,
        required :[true,"Please enter a contact phone "]
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("contacts", contactSchema)