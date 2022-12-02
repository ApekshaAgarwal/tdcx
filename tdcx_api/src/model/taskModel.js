exports.findOne = async function(findObj){
   const findData = await global.mongoDB.collection('tasks').findOne(findObj);
   return findData;
}

exports.insertOne = async function(insertObj){
   const insertResult = await global.mongoDB.collection('tasks').insertOne(insertObj);
   return insertResult;
}

exports.findAll = async function(findObj){
   const findData = await global.mongoDB.collection('tasks').find(findObj).sort({_id: -1}).toArray();
   return findData;
}

exports.updateOne = async function(findObj, updateObj){
   const updateRes = await global.mongoDB.collection('tasks').updateOne(findObj, {$set:updateObj}, {upsert:true});
   return updateRes;
}

exports.deleteOne = async function(deleteObj){
   const deleteRes = await global.mongoDB.collection('tasks').deleteOne(deleteObj);
   return deleteRes;
}

exports.sumTask = async function(){
   const sumRes = await global.mongoDB.collection('tasks').aggregate([
    {
      $match: {
        completed: true
      }
    },
    {
      $count: "completed"
    }
  ]).toArray();
   return sumRes;
}