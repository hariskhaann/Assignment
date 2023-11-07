"use strict";
//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
let guestList7 = ["Albert Einstein", "Marie Curie", "Nelson Mandela", "Isaac Newton", "Jane Austen", "Leonardo da Vinci"];
// Print invitation messages for each person 
for (let i = 0; i < guestList7.length; i++) {
    console.log(`Dear ${guestList7[i]}, you are invited to dinner. We would be honored to have your company.`);
}
// Inform that a bigger dinner table is found 
console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array 
guestList7.unshift("Galileo Galilei");
// Add one new guest to the middle of the array 
guestList7.splice(Math.floor(guestList7.length / 2), 0, "Emily Dickinson");
// Use push() to add one new guest to the end of the list 
guestList7.push("Vincent van Gogh");
// Print invitation messages for each person in the updated list 
for (let i = 0; i < guestList7.length; i++) {
    console.log(`Dear ${guestList7[i]}, you are invited to dinner. We would be honored to have your company.`);
}
// Inform that the new dinner table won't arrive in time 
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests from the list until only two names remain 
while (guestList7.length > 2) {
    let removedGuest = guestList7.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print a message indicating the number of people invited to dinner 
console.log(`The number of people invited to dinner is ${guestList7.length}.`);
// Print a message to each of the two remaining people 
for (let i = 0; i < guestList7.length; i++) {
    console.log(`Dear ${guestList7[i]}, you're still invited to dinner.`);
}
