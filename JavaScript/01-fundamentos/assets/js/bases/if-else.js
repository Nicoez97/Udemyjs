let a = 5;

if (a > 10){// undefined , null, una asignacion;
    console.log('A es mayor a 10')
}else{
    console.log('A es menor a 10')
}

//console.log('Fin de programa');

const hoy = new Date(); //{}
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes ...

console.log({dia});

if( dia === 0 ){
    console.log('Domingo');
}else if ( dia ===1 ) {
    console.log('Lunes');
    
    //if( dia === 1 ){
    //    console.log ('Lunes');
    //}else{
    //    console.log('No es lunes ni domingo')
    //}
    
}else if ( dia === 2){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo...');
}


// Sin usar If Else, o Switch,unicamente objetos
dia=3;// 0:domingo, 1 : lunes..

const diasLetras={
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',   
}

const diasLetras2=['domingo','lunes','martes','miercoles','jueves','viernes','sabado',];
//dia de la semana
console.log(diasLetras2[dia] || 'Dia no es valido');