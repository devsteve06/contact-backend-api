const asyncHandler = require('express-async-handler')
const user = require('../models/userModel')
const bcrypt = require('bcrypt')


//@desc register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(400)
        throw new Error("Please fill all the fields")
    }

    const userExists = await user.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }       

    const hashedPassword = await bcrypt.hash(password,10)
    console.log(hashedPassword)

    const newUser = await user.create({
        username,
        email,
        password:hashedPassword
    })

    console.log(newUser)

    if(newUser){    
    res.status(201).json({
        _id: newUser.id,
        username: newUser.username,
        email: newUser.email 
    })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})
   

//@desc login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"succcessfully accessed user login endpoint"})
} ) 

//@desc current user info 
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message:"succcessfully accessed current user endpoint"})
} ) 

module.exports = {
     registerUser,
     loginUser,
     currentUser
}
