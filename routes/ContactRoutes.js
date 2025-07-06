const express = require('express')
const router = express.Router()
const {getContacts,
     getContact,
     createContact,
     updateContact,
     deleteContact} = require('./controllers/ContactController') //controller handling import

//routes go here
router.route('/').get(getContacts)

router.route('/').post(createContact)

router.route('/:id').get(getContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)

module.exports = router;
