const asyncHandler = require('express-async-handler')

//@desc register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res)=>{
    res.json({message:"succcessfully accessed user register endpoint"})
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
