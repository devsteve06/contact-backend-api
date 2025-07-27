const { constants } = require("../constants");

const errorHandler = (err,req,res,next) =>{
     const statusCode = res.statusCode ? res.statusCode : 500;  //returns internal server error if status code unavailable
     res.status(statusCode);
    
     //switch case for different error scenarios
     switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation Error",
                 message : err.message,
                  stackTrace :  err.stack ,
                });
            break;
        case constants.UNATHORIZED:
            res.json({title: "Unauthorized", 
                message : err.message, 
                 stackTrace :  err.stack ,
            });
            break; 
        case constants.FORBIDDEN_ERROR:
            res.json({title: "Forbidden", 
                message : err.message, 
                stackTrace :  err.stack ,
            });
            break; 
        case constants.NOT_FOUND:
            res.json({title: "Not Found", 
                message : err.message, 
                 stackTrace :  err.stack ,
            });
            break; 
        case constants.SERVER_ERROR:
            res.json({title: "Server Error", 
                message : err.message, 
                 stackTrace :  err.stack ,
            });
            break;  
        default:
            res.json({  message: "No errors, all good." });
            break;
     }
    };

module.exports = errorHandler