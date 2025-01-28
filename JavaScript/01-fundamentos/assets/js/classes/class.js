

class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log (this.nombre); 
        console.log ('Hola a todos, soy un metodo statico');
    }
    
    nombre = '' ;
    codigo = '' ;
    frase  = '' ;
    comida = '';

    constructor( nombre = 'Sin nombre', codigo='Sin codigo', frase='Sin frase'){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona ._conteo++;
    }

    set setComidaFavorita (comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () { 
        return `La comida favorita de ${ this.nombre} es ${ this.comida} `;
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre} y mi identidad es ${this.codigo}`);

    }

    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${this.frase}`);

       
    }

}

const spiderman =new Persona ('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Sipiderman');
const ironman =new Persona ('Tony Starck', 'Ironman', 'Yo soy Ironman');

//console.log(ironman);

spiderman.miFrase();
//ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
//spiderman.comida='Duende Verde';

//console.log (spiderman.getComidaFavorita);

//console.log(spiderman);
//Persona._conteo =2;
console.log ('Conteo statico', Persona._conteo );
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna= 'Hola mundo';
console.log( Persona.propiedadExterna );
console.log( Persona ); 