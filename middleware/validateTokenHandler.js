const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const validateTokenHandler = asyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401);
        throw new Error('Authorization token is missing or invalid');
    }

    token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(401);
            throw new Error('User is not authorized');
        }
        console.log(decoded); // Log the decoded token for debugging
                
        req.user = decoded.user; // Changed from decoded.new_user
        next(); // CRITICAL: Pass control to the next middleware
    });
});

module.exports = validateTokenHandler;