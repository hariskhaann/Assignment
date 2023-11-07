//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. 
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. 
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. 
//• Print a message to each of the two people still on your list, letting them know they’re still invited. 
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guestList6: string[] = ["Albert Einstein", "Marie Curie", "Nelson Mandela", "Isaac Newton", "Jane Austen", "Leonardo da Vinci"]; 
 
// Print invitation messages for each person 
for (let i = 0; i < guestList6.length; i++) { 
    console.log(`Dear ${guestList6[i]}, you are invited to dinner. We would be honored to have your company.`); 
} 
 
// Inform that a bigger dinner table is found 
console.log("Good news! We found a bigger dinner table."); 

 
// Add one new guest to the beginning of the array 
guestList6.unshift("Galileo Galilei"); 
 
// Add one new guest to the middle of the array 
guestList6.splice(Math.floor(guestList6.length / 2), 0, "Emily Dickinson"); 
 
// Use push() to add one new guest to the end of the list 
guestList6.push("Vincent van Gogh"); 
 
// Print invitation messages for each person in the updated list 
for (let i = 0; i < guestList6.length; i++) { 
    console.log(`Dear ${guestList6[i]}, you are invited to dinner. We would be honored to have your company.`); 
} 
 
// Inform that the new dinner table won't arrive in time 
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner."); 
 
// Remove guests from the list until only two names remain 
while (guestList6.length > 2) { 
    let removedGuest6 = guestList6.pop(); 
    console.log(`Sorry, ${removedGuest6}, we can't invite you to dinner.`); 
} 
 
// Print a message to each of the two remaining people 
for (let i = 0; i < guestList6.length; i++) { 
    console.log(`Dear ${guestList6[i]}, you're still invited to dinner.`); 
} 
 
// Remove the last two names from the list, making it empty 
guestList6.pop(); 
guestList6.pop(); 
 
// Print the list to make sure it's empty 
console.log("Remaining guests: ", guestList6); 