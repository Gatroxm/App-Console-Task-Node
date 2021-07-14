//Inquirer library import
const inquirer = require('inquirer');
// Colors library import
require('colors');
// The selection menu is set
const menuOptions = [{
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [{
            value: '1',
            name: `${'1.'.green} Crear Tarea`
        },
        {
            value: '2',
            name: `${'2.'.green} Listar Tareas`
        },
        {
            value: '3',
            name: `${'3.'.green} Listar Tareas Completadas`
        },
        {
            value: '4',
            name: `${'4.'.green} Listar Tareas Pendientes`
        },
        {
            value: '5',
            name: `${'5.'.green} Completar Tarea(s)`
        },
        {
            value: '6',
            name: `${'6.'.green} Borrar Tarea`
        },
        {
            value: '0',
            name: `${'0.'.green} Salir`
        }
    ]
}];

// Print the menu

const inquirerMenu = async() => {
    console.log("===================================".green);
    console.log("      Seleccione una opción".green);
    console.log("===================================\n".green);
    /**
     * The options of the array menu @menuOptions are stored in a variable @opcion in a structured way
     */
    const { opcion } = await inquirer.prompt(menuOptions)
        // returns the options
    return opcion;

}

// Pause the console

const pausa = async() => {
    // Question that is displayed when executing the method
    const qestion = [{
            type: 'input',
            name: 'Salida',
            message: `\nPrecione ${'Enter'.blue}, para continuar \n`
        }]
        // question execution
    await inquirer.prompt(qestion)
}

/**
 * Gets the values ​​entered by the console
 * @param {String} message the value entered by console
 * @returns Description 
 */

const leeInput = async(message) => {
        const qestion = [{
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                // Validación de el value que tenga caracteres
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }];
        // Destructuring of the description
        const { desc } = await inquirer.prompt(qestion)
            // Returns the description
        return desc
    }
    // Module export

const listarTareasBorrar = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i+1}.`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });
    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`
    });
    const pregunstas = [{
        type: 'list',
        name: 'id',
        message: '¿Que tarea desea Borrar?',
        choices
    }]
    const { id } = await inquirer.prompt(pregunstas)
    return id;
}


const confirmMessage = async(message) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];
    const { ok } = await inquirer.prompt(question)
    return ok;
}

const mostrarListadoTareasCheclist = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i+1}.`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });
    const pregunsta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'seleccione',
        choices
    }]
    const { ids } = await inquirer.prompt(pregunsta)
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leeInput,
    listarTareasBorrar,
    confirmMessage,
    mostrarListadoTareasCheclist
}