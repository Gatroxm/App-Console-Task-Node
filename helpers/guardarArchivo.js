// Import File Sistem
const fs = require('fs')

/**
 * The function guardarDB save information task in file data.txt
 * @param {Array} data, information of task
 */

const archivo = './db/data.json';
const guardarDB = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data))
}

/**
 * Read file data.json
 * @returns {JSON} info 
 */

const leerDB = () => {

    if (!fs.existsSync(archivo)) {
        return null
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    return JSON.parse(info);
}

module.exports = {
    guardarDB,
    leerDB
}