const express = require('express')
const router = express.Router()

//routes go here
router.route('/').get((req,res)=>{
     res.status(200).json({msg : "this is the endpoint for all contacts"})
})

router.route('/').post((req,res)=>{
     res.status(200).json({msg : "created a new contact"})
})

router.route('/:id').get((req,res)=>{
     res.status(200).json({msg : `Obtained contact ${req.params.id}`})
})

router.route('/:id').put((req,res)=>{
     res.status(200).json({msg : `updated contact ${req.params.id}`})
})

router.route('/:id').delete((req,res)=>{
     res.status(200).json({msg :`removed contact ${req.params.id}` })
})

module.exports = router;
