function saludar( nombre){
    console.log(arguments);
    console.log('Hola '+ nombre);
}

const saludar2 =function(nombre) {
    console.log('Hola '+nombre);
}

const saludarFlecha= () => {
    console.log('Hola Flecha');
}

const saludarFlecha2= (nombre) => {
    console.log('Hola '+nombre);
}

saludar('Nicolas', 40, true, 'Costa Rica');
//saludar2('Nicolas');

saludarFlecha();
saludarFlecha2('Melissa');