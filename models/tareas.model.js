//Import of Task class
const Tarea = require("./tarea.model");

class Tareas {

    // Task parameters
    _listado = {};


    /**
     * join a gerer function that is responsible for returning an array with the tasks filtered by the id
     * @returns @listado Arreglo de tareas 
     */
    get ListadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach((key) => {
            listado.push(this._listado[key]);
        });
        return listado;
    }

    // Initialization of variables 
    constructor() {
        this._listado = {};
    }

    /**
     * Function in charge of creating tasks and adding them to the task list
     * @param {String} desc 
     */
    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

}

// Export Class Task
module.exports = Tareas;