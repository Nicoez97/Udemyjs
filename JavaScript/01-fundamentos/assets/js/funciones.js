function saludar( nombre){
    //console.log(arguments);
    //console.log('Hola '+ nombre);
    return [1,2];


    //Esto nunca se va a ejecutar
    console.log('Soy un codigo que despues del return');
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

 const retonoDesaludar=saludar('Nicolas', 40, true, 'Costa Rica');//1

//saludar2('Nicolas');

//saludarFlecha();
//saludarFlecha2('Melissa');

function sumar(a,b) {
    return a +b;
}

//const sumar2= (a,b) =>{
//    return a +b;
//}
const sumar2= (a,b) =>a +b;
function getAleatorio(){
    return Math.random();
}

//En una funcion de flecha , que no tenga llaves {}

const getAleatorio2= () => Math.random;



console.log(getAleatorio2());