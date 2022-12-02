exports.findOne = async function(findObj, cb){
   const findData = global.mongoDB.collection('users').findOne(findObj);
   return findData;
}