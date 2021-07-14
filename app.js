// Color library required
require('colors');
const {
    guardarDB,
    leerDB
} = require('./helpers/guardarArchivo');
// importing the functions into the helpers folder
const {
    inquirerMenu,
    pausa,
    leeInput,
    listarTareasBorrar,
    confirmMessage,
    mostrarListadoTareasCheclist
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
    if (tareasDB) {
        tareas.cargarTareasArray(tareasDB)
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
                tareas.listadoCompleto();
                break;
            case '3': // function list completed
                tareas.listadoCompletadasPendientes(true)
                break;
            case '4': //Function list pending
                tareas.listadoCompletadasPendientes(false)
                break;
            case '5': // Function Check list tasck
                const ids = await mostrarListadoTareasCheclist(tareas.ListadoArr);
                tareas.toggleTasck(ids);
                break;
            case '6':
                const id = await listarTareasBorrar(tareas.ListadoArr);
                if (id !== '0') {
                    if (await confirmMessage('Desea eliminar la tarea?')) {
                        tareas.borrarTareas(id);
                        console.log('Tarea Borrada Correctamente');
                    }
                }
                break;
        }

        guardarDB(tareas.ListadoArr)
            // The console process is paused
        await pausa();
    } while (opt !== '0');
}

// Method execution
main();