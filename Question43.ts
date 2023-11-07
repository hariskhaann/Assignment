//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians6(magicians: string[]): void { 
    for (let magician of magicians) { 
        console.log(magician); 
    } 
} 
 
// Define the make_great function 
function make_great6(magicians: string[]): string[] { 
    // Create a copy of the array to leave the original unchanged 
    let copyMagicians = magicians.slice(); 

 
    // Modify the copy by adding the phrase "the Great" to each magician's name 
    for (let i = 0; i < copyMagicians.length; i++) { 
        copyMagicians[i] = `the Great ${copyMagicians[i]}`; 
    } 
 
    return copyMagicians; 
} 
 
// Make an array of magician's names 
let magicianNames6: string[] = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Derren Brown']; 
 
// Call make_great with a copy of the array and store the new array 
let greatMagicians6 = make_great6(magicianNames6.slice()); 
 
// Call show_magicians with each array to show the original and modified lists 
console.log("Original Magicians:"); 
show_magicians6(magicianNames6); 
 
console.log("\nGreat Magicians:"); 
show_magicians6(greatMagicians6)