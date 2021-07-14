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

    borrarTareas(id = '') {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }

    /**
     * Se van a cargar las tareas en el _listado
     * @param {Array} tarea 
     */

    cargarTareasArray(tarea = []) {
        tarea.forEach(element => {
            this._listado[element.id] = element;
        });
    }

    /**
     * Function in charge of creating tasks and adding them to the task list
     * @param {String} desc 
     */
    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

    /**
     * Lista todas las la tareas 
     */

    listadoCompleto() {
        console.log();
        this.ListadoArr.forEach((element, index) => {
            const idx = `${index + 1}`.green;
            const { desc, completadoEn } = element;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${idx}. ${desc} ::: ${estado}`);
        })
    }

    /**
     * Listado de las tareas tanto completadas o pendientes
     * @param {Booblean} conpletadas 
     */

    listadoCompletadasPendientes(conpletadas = true) {
        let contador = 0;
        this.ListadoArr.forEach(element => {
            const { desc, completadoEn } = element;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
            if (conpletadas) {
                if (completadoEn) {
                    const idx = `${contador + 1}.`.green;
                    console.log(`${idx}. ${desc} ::: ${completadoEn.green}`);
                }
            } else {
                if (!completadoEn) {
                    const idx = `${contador + 1}.`.green;
                    console.log(`${idx} ${desc} ::: ${estado.red}`);
                }


            }
        })
    }

    toggleTasck(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.ListadoArr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }

        });

    }
}

// Export Class Task
module.exports = Tareas;