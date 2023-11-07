"use strict";
//42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians5(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define the make_great function 
function make_great8(magicians) {
    // Modify the array by adding the phrase "the Great" to each magician's name 
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
    return magicians;
}
// Make an array of magician's names 
let magicianNames5 = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Derren Brown'];
// Call make_great to modify the array 
let greatMagicians = make_great8(magicianNames5);
// Call show_magicians to see the modified list 
show_magicians5(greatMagicians);
