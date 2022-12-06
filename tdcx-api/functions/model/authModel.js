const {dbFallback} = require('../utility');

exports.findOne = async function(findObj, cb){
   let findData;
   if(typeof global.mongoDB !== 'undefined'){
   findData = global.mongoDB.collection('users').find(findObj);
   }
   else{
            global.mongoDB = dbFallback();
            findData = global.mongoDB.collection('users').find(findObj);  
   }
   return findData;
}