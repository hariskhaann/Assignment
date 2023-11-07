"use strict";
//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. 
//• If the list is empty, print the message We need to find some users! 
//• Remove all of the usernames from your array, and make sure the correct message is printed. 
let usernames8 = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];
// Check if the list of users is not empty 
if (usernames8.length > 0) {
    // Loop through the array and print a greeting to each user 
    for (let i = 0; i < usernames8.length; i++) {
        if (usernames8[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${usernames8[i]}, thank you for logging in again.`);
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Remove all usernames from the array 
usernames8 = [];
// Check if the list of users is not empty after removal 
if (usernames8.length > 0) {
    // This block should not be executed as the list is empty 
    for (let i = 0; i < usernames8.length; i++) {
        console.log(`Hello ${usernames8[i]}, thank you for logging in again.`);
    }
}
else {
    console.log("We need to find some users!");
}
