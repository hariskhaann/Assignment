"use strict";
//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. 
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicianNames = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Derren Brown'];
show_magicians(magicianNames);
