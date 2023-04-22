const Task = require('../../../models/task');

//controller action for adding new product
module.exports.taskslist = async function (req, res) {
    let page =req.query.page||1;
    let limit = 2; // we can change accordingly how much item we need per page
    //fetch only those tasks which are related to login user and then pagination per page 2 item
    let tasks = await Task.find({user:req.user.id}).limit(limit*1).skip((page-1)*limit).exec();;
    // if we find a list
    if (tasks) {
        return res.status(200).json({
            data: {tasks},
            message: 'tasks fetched sucessfully'
        });
    } else {
        // if we dont find list
        return res.status(404).json({
            message: 'No task found'
        });
    }

};
module.exports.findtask = async function (req, res) {
    let task = await Task.findById(req.params.id);
    //if we find task with given id 
    if (task.user==req.user.id) {
        return res.status(200).json({
            data: { task },
            message: 'Task with given id fetched'
        });
    } else {
        //if we dont find any task with the given id in database
        return res.status(404).json({
            message: 'Not Authorized To Find The Task'
        });
    }

};
module.exports.create = async function (req, res) {
    let task = await Task.create({
        title:req.body.title,
        discription:req.body.discription,
        status:req.body.status,
        user:req.user._id // set user as user id  
    });
    // task = await task.populate('user');
    return res.status(200).json({
        data: { task },
        message: 'task created'
    });
};
module.exports.update = async function (req, res) {
    //find task 
    let task = await Task.findById(req.params.id);
    // if task is find and task user is matched with req user
    if (task.user==req.user.id) {
        task.title=req.body.title;
        task.discription=req.body.discription;
        task.status=req.body.status; // update task 
        return res.status(200).json({
            data: { task },
            message: 'Task is Updated',
        });
    } else {
        // if task user do not match with req user or no task is found
        return res.status(401).json({
            message: 'Not Authorized to Update'
        });
    }

};
module.exports.delete = async function (req, res) {
    // find task with given id
    let task = await Task.findById(req.params.id);
    // if task user and req user matched 
    if(task.user==req.user.id){
        task.delete;// delete task
        return res.status(200).json({
            data: { task },
            message: 'This Task Is Deleted'
        });
    } else {
        // if task user do not match with req user or no task is found
        return res.status(401).json({
            message: 'You Are Not Authorized, So Cant Delete'
        });
    }

};
