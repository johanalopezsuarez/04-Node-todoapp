const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')
const TaskRepository = require('./repositores/TaskRepository')

const main = async() => {

    const taskRepository = new TaskRepository();
    let option = '';

    do {
        option = await inquirerMenu();
        
        switch (option) {
            case 1:
                //TODO: hacer que el usuario pueda ingresar el titulo de task
                const title = await inquirerInput('Task Title');
                taskRepository.createTask(title);
            break;

            case 2:
                const allTasks = taskRepository.getAllTask();
                console.log(allTasks);
            break;
        }
    } while (option !== 'x');
}

main();