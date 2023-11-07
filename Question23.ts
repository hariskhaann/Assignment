//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this: 
//let car = 'subaru'; 
//console.log("Is car == 'subaru'? I predict True.") 
//console.log(car == 'subaru') 
//• Look closely at your results, and make sure you understand why each line evaluates to True or False. 
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car: string = 'subaru'; 
 
 
console.log(car == 'subaru'); 
 
console.log(car != 'honda'); 

console.log(car == 'Subaru'); 
 
console.log(car == 'subaru' && car.length === 6); 
 
console.log(car == 'subaru' || car.length === 5); 
  
console.log(!(car == 'subaru' || car.length === 6)); 
  
console.log(car != 'toyota' && car.length === 6); 
 
console.log(car.startsWith('su') && car.endsWith('ru')); 

 
console.log(car.startsWith('su') && car.includes('aru')); 
 
console.log(car.startsWith('sub') || car.includes('aru'));
