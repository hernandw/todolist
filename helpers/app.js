const colors = require('colors');


const mostrarMenu = ()=>{
    console.clear();
    console.log('========================'.green);
    console.log(' Selecciones una opción'.green);
    console.log('========================\n'.green);
}

mostrarMenu();

module.exports = {
    mostrarMenu
}