require('dotenv/config')
const jwt = require('jsonwebtoken');
const privateKey = process.env.JWT_TOKEN;
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