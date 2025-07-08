const express = require('express')
const router = express.Router()
const {getContacts,
     getContact,
     createContact,
     updateContact,
     deleteContact} = require('../controllers/ContactController') //controller handling import

//routes go here
router.route('/').get(getContacts).post(createContact)

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;
