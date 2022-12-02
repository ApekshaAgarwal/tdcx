require('dotenv/config')
const jwt = require('jsonwebtoken');
const privateKey = process.env.JWT_TOKEN;
exports.jwtSign = (req, res, next) => {
    jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
        next();
    });
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