
const authModel = require('../../model/authModel');
const {jwtSign} = require('../../utility');
exports.login = async(req, res, next) => {
const {userName, password} = req.body;
  const result = await authModel.findOne({userName,password});
  if(result){
    jwtSign({userName,"name":"Apeksha"}, (jwtToken)=>{
      return res.status(200).json({"success":true, "message":"Authentication Successful", "token": jwtToken})
    });    
  }else{
    return res.status(200).json({"success":false, "message":"Authentication Failed"})
  }
}