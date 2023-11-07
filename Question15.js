"use strict";
//15.  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. 
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
//• Print a second set of invitation messages, one for each person who is still in your list.
let guestList4 = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
// Print invitation messages for each person 
for (let i = 0; i < guestList4.length; i++) {
    console.log(`Dear ${guestList4[i]}, you are invited to dinner. We would be honored to have your company.`);
}
// Identify the guest who can't make it 
let guestUnableToAttend = guestList4[1]; // Assuming Ada Lovelace can't make it 
// Print a message about the guest who can't make it 
console.log(`Unfortunately, ${guestUnableToAttend} can't make it to the dinner.`);
// Replace the guest who can't make it with a new person 
guestList4[1] = "Marie Curie"; // Replace Ada Lovelace with Marie Curie 
// Print new invitation messages for each person 
for (let i = 0; i < guestList4.length; i++) {
    console.log(`Dear ${guestList4[i]}, you are invited to dinner. We would be honored to have your company.`);
}
