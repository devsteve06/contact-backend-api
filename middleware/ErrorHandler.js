const errorHandler = (err,req,res,next) =>{
     const statusCode = res.statusCode ? res.statusCode : 500  //returns internal server error if status code unavailable
     switch (statusCode) {
        case 400:
            res.json({ "title" : "Not found", message : err.message, stackTrace : err.stack})
                    }
            break;
     
        default:
            break;
     }
     //formatting errors in json
     

module.exports = errorHandler