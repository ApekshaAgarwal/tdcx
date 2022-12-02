const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth/login');
const { createTask, taskList, taskUpdate, taskDelete } = require('../controllers/task/task');
const {verifyToken} = require('../middleware/middleware');
//Auth Routes
router.route('/').get((req, res, next)=>{
    return res.status(200).json({"success":true,"message":"TDCX APIs"});
})
router.route('/login').post(login)

//Task Routes
router.route('/tasks').post(verifyToken, createTask)
router.route('/tasks').get(verifyToken, taskList)
router.route('/tasks/:id').put(verifyToken, taskUpdate)
router.route('/tasks/:id').delete(verifyToken, taskDelete)

module.exports = router;

