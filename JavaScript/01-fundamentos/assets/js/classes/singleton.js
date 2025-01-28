

class Singleton {

    static instancia; // undefine
    nombre = '';
    
    constructor(nombre=''){

        if( !!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia=this;
        this.nombre=nombre;

        //return this;
    }

}

const instancia1 = new Singleton ('Ironman');
const instancia2  = new Singleton('Spiderman');
const instancia3  = new Singleton('BlackPanter');
console.log(`Nombre la la instacia1 es: ${instancia1.nombre}`);
console.log(`Nombre la la instacia2 es: ${instancia2.nombre}`);
console.log(`Nombre la la instacia3 es: ${instancia3.nombre}`);