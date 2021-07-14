// import v4 from uuid
const { v4: uuidv4 } = require('uuid')

class Tarea {
    // Task parameters
    id = '';
    desc = '';
    completadoEn = null;

    // Initialization of variables 
    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }

}

// Export class Task
module.exports = Tarea;