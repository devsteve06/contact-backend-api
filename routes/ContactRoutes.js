const express = require('express')
const router = express.Router()
const validateToken = require("../middleware/validateTokenHandler")

const {getContacts,
     getContact,
     createContact,
     updateContact,
     deleteContact} = require('../controllers/ContactController') //controller handling import

//routes go here
router.use(validateToken) 
router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;
