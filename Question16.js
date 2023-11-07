"use strict";
//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table. 
//• Add one new guest to the beginning of your array. 
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList5 = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela", "Marie Curie"];
// Print invitation messages for each person 
for (let i = 0; i < guestList5.length; i++) {
    console.log(`Dear ${guestList5[i]}, you are invited to dinner. We would be honored to have your company.`);
}
// Identify the guest who can't make it 
let guestUnableToAttend5 = guestList5[1]; // Assuming Ada Lovelace can't make it 
// Print a message about the guest who can't make it 
console.log(`Unfortunately, ${guestUnableToAttend5} can't make it to the dinner.`);
// Replace the guest who can't make it with a new person 
guestList5[1] = "Marie Curie"; // Replace Ada Lovelace with Marie Curie 
// Print new invitation messages for each person 
for (let i = 0; i < guestList5.length; i++) {
    console.log(`Dear ${guestList5[i]}, you are invited to dinner. We would be honored to have your company.`);
}
// Inform that a bigger dinner table is found 
console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array 
guestList5.unshift("Isaac Newton");
// Add one new guest to the middle of the array 
guestList5.splice(Math.floor(guestList5.length / 2), 0, "Jane Austen");
// Use push() to add one new guest to the end of the list 
guestList5.push("Leonardo da Vinci");
// Print invitation messages for each person in the updated list 
for (let i = 0; i < guestList5.length; i++) {
    console.log(`Dear ${guestList5[i]}, you are invited to dinner. We would be honored to have your company.`);
}
