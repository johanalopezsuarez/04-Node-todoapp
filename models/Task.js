const { v4: uuidv4 } = require('uuid');

class Task {
    id = '';
    title = '';
    done = null;
    create = null;
    finish = null;

    constructor(title) {
        this.id = uuidv4();  //TODO: asignar id que se autogenere
        this.title = title;
        this.done = false;
        this.create = new Date();
    }
}

module.exports = Task;