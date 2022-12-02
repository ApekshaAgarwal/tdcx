
const taskModel = require('../../model/taskModel');
const ObjectId = require('mongodb').ObjectId;

//New Task Create Method
exports.createTask = async (req, res, next) => {
    const {name} = req.body;
    const result = await taskModel.insertOne({name,completed:false});
    if(result){
        return res.status(200).json({"success":true, "message":"Task created successful"})
    }else{
        return res.status(200).json({"success":false, "message":"Task not created"})
    }
}

//View task list
exports.taskList = async (req, res, next) => {
    const result = await taskModel.findAll({});
    const sumTask = await taskModel.sumTask();
    const completedTasks = sumTask.length > 0 ? sumTask[0].completed : 0;
    const totalTasks = result.length || 0;
    if(result.length > 0){
        return res.status(200).json({"success":true, data:result, completedTasks, totalTasks})
    }else{
        return res.status(200).json({"success":false, data:[]})
    }
}

// Task Update Method
exports.taskUpdate = async (req, res, next) => {

    const {name,completed} = req.body;
    const {id}= req.params;
    const result = await taskModel.updateOne({_id : ObjectId(id) },{name,completed});
    if(result){
        return res.status(200).json({"success":true, "message":"Task updated successful"})
    }else{
        return res.status(200).json({"success":false, "message":"Task not updated"})
    }
}


// Task Delete Method
exports.taskDelete = async (req, res, next) => {
    const {id}= req.params;
    const result = await taskModel.deleteOne({_id : ObjectId(id)});
    if(result){
        return res.status(200).json({"success":true, "message":"Task deleted successful"})
    }else{
        return res.status(200).json({"success":false, "message":"Task not deleted"})
    }
}
