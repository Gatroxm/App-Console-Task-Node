// Color library required
require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
// importing the functions into the helpers folder
const {
    inquirerMenu,
    pausa,
    leeInput
} = require('./helpers/inquirer');

// The model tasks class is required
const Tareas = require('./models/tareas.model');
// The console is cleaned
console.clear()


// Main method where the program is executed through a selection of options
const main = async() => {
    // variable where the selected option is saved
    let opt = '';
    // instance of the Tasks class
    const tareas = new Tareas();
    // instance function LeerDB()
    const tareasDB = leerDB();
    await pausa();
    if (tareasDB) {
        tareas._listado[tareasDB.id] = tareasDB;
    }
    // do while loop where the selected option is handled
    do {
        // print menu and return option.
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // The description of the task which we are going to save is obtained
                const desc = await leeInput('descripción: ');
                // The task is saved in memory
                tareas.crearTarea(desc);
                break;
            case '2':
                //Listado de tareas
                console.log(tareas._listado)
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                break;
        }

        // guardarDB(tareas.ListadoArr)
        // The console process is paused
        await pausa();
    } while (opt !== '0');
}

// Method execution
main();