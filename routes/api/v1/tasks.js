const express = require('express');
const passport = require('passport');
const router = express.Router();
// require task controller file
const tasksApi = require('../../../controllers/api/v1/tasks_api');

//direct router to taskslist controller action
router.get('/',passport.authenticate('jwt',{session:false}),tasksApi.taskslist);//Returns a list of all tasks.
//direct router to findtask controller action
router.get('/:id',passport.authenticate('jwt',{session:false}),tasksApi.findtask);// Returns the details of a single task with the given id.
//direct router to create controller action
router.post('/',passport.authenticate('jwt',{session:false}),tasksApi.create);//Creates a new task.
//direct router to update controller action
router.put('/:id',passport.authenticate('jwt',{session:false}),tasksApi.update);//Updates the task with the given id.
//direct router to delete controller action
router.delete('/:id',passport.authenticate('jwt',{session:false}),tasksApi.delete);//Deletes the task with the given id.


module.exports = router;