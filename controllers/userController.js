const asyncHandler = require('express-async-handler')
const user = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


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
    const {email, password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("all fields are mandatory ")
    }

    const new_user =await user.findOne({email})
    if (!new_user) {
        res.status(400)
        throw new Error("user not found,please sign up first")
    }

        if (new_user && await bcrypt.compare(password, new_user.password) ) {
               
            const accessToken = jwt.sign(
             { new_user : {
                  email : new_user.email,
                password : new_user.password,
                id : new_user.id
              }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn : "1m" }       
            )
            res.status(200).json({accessToken})

        }else{
                res.status(401)
                throw new Error('email or password is invalid')
            }
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
