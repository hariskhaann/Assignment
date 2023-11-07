//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName1: string = "john doe"; 

let lowercaseName: string = personName.toLowerCase();

let uppercaseName: string = personName.toUpperCase();

let titlecaseName: string = personName.toLowerCase().replace(/(?:^|\s)\S/g,(char)=>char.toUpperCase()); 

console.log(`Original Name: ${personName1}`); 
console.log(`Lowercase Name: ${lowercaseName}`); 
console.log(`Uppercase Name: ${uppercaseName}`); 
console.log(`Title Case Name: ${titlecaseName}`);

