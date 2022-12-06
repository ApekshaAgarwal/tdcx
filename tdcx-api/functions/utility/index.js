
const jwt = require('jsonwebtoken');
const mongo =  require('../db/mongo')
const privateKey = process.env.JWT_TOKEN || 'THISISMYPRIVATEKEYFORTDCX9876';
exports.jwtSign = (obj, cb) => {
    jwt.sign(obj, privateKey, function(err, token) {
        if(!err){
            return cb(token);
        }else{
            console.log("Error while create JWT Token",err);
            return cb(err);
        }
    });
}

//Fallback function for DB connection
exports.dbFallback = () => {
    if(typeof global.mongoDB === 'undefined'){
   
        mongo.mongoConnection((connectData)=>{
           if (connectData.success) {
              global.mongoDB = connectData.client;
           } else {
               console.log("Mongo Connection Error", connectData.error)
           }
       })
     }
     return global.mongoDB;
}

exports.verifyToken = (req, res, next) => {
    const {authorization} = req.headers
    jwt.verify(authorization, privateKey, function(err, decoded) {
        if(!err){
            next();
        }else{
            return res.status(502).json({
                success:false,
                message:"Not valid user"
            })
        }
    });
}