/**
 * 2C= Two of Clubs 
 * 2D= Two of Diaminds 
 * 2H= Two of Hearts
 * 2C= Two of Spades 
 */

const { shuffle } = require("underscore");

let deck = [];
const tipos = ['C','D','H','S'];
const especiales=['A','J','Q','K'];

const crearDeck = () => {

    for ( let i = 2; i<= 10; i ++) {
        for (let tipo of tipos){
            deck.push( i + tipo);
        }
    }

    for(let tipo of tipos){
        for( let esp of especiales){
            deck.push( esp + tipo)
        }
    }

    console.log( deck );
    deck = _.shuffle(deck);
    console.log( deck );
    return deck;
}

crearDeck();