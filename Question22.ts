//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program

let colors: string[] = ["Red", "Green", "Blue"]; 
 

let colorToPrint: string = colors[3]; 
 
// Uncomment the line below to correct the error 
// let colorToPrint: string = colors[2]; 
 
// Print the selected color 
console.log("Selected Color:", colorToPrint);