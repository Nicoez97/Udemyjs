/**
 * 2C= Two of Clubs 
 * 2D= Two of Diaminds 
 * 2H= Two of Hearts
 * 2C= Two of Spades 
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

// Esta funcion crea un nuevo deck
const crearDeck = () => {

    for ( let i = 2; i <= 10; i++ ) {
        for (let tipo of tipos) {
            deck.push ( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales){
            deck.push( esp + tipo);
        }
    }

    //console.log( deck );
    deck = _.shuffle(deck);
    console.log( deck );
    return deck;
}

crearDeck();

//Esta funcion me permite timar un carta

const pedirCarta = () => {
    
    const carta = deck.pop();

    console.log(deck);
    console.log(carta); // carta debe de ser de la baraja
    return carta;
}

pedirCarta();