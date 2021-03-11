const Task =  require('../models/Task');
const {getData, saveData} = require('../helpers/fileManager');

class TaskRepository {

    _tasks = null; //para accede de forma Private _

    constructor() {
        const data = getData();

        if(data) {
            this._tasks = data;
        }else{
            this._tasks = [];
        }
    }

    getAllTask() {
        return this._tasks;
    }

    /* 
    * @param {String} title 
    * TODO:  Nos falta persistir datos en archivo
    */
    createTask(title) {
        const task = new Task(title);
        this._tasks.push(task);
        saveData(this._tasks);
    }

    deleteTask() {

    }

    updateTask() {

    }

}

module.exports = TaskRepository;