const mongoose = require('mongoose')

//contact schema 
const contactSchema = mongoose.Schema({
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

module.exports = mongoose.model("clients", contactSchema)