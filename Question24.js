"use strict";
//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following: 
//• Tests for equality and inequality with strings 
//• Tests using the lower case function 
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
//• Tests using "and" and "or" operators 
//• Test whether an item is in a array 
//• Test whether an item is not in a array 
let string1 = 'apple';
let string2 = 'Orange';
let number1 = 42;
let number2 = 15;
let fruits = ['apple', 'banana', 'pear'];
console.log(`Test 1: Is string1 equal to 'apple'? I predict True.`, string1 == 'apple');
console.log(`Test 2: Is string1 not equal to string2? I predict True.`, string1 != string2);
console.log(`Test 3: Is string1 in lower case equal to 'apple'? I predict True.`, string1.toLowerCase() == 'apple');
console.log(`Test 4: Is string2 in lower case not equal to string1? I predict True.`, string2.toLowerCase() != string1);
console.log(`Test 5: Is number1 equal to 42? I predict True.`, number1 == 42);
console.log(`Test 6: Is number2 not equal to 42? I predict True.`, number2 != 42);
console.log(`Test 7: Is number1 greater than number2? I predict True.`, number1 > number2);
console.log(`Test 8: Is number1 less than or equal to number2? I predict False.`, number1 <= number2);
console.log(`Test 9: Is number1 greater than 30 and number2 less than 20? I predict True.`, number1 > 30 && number2 < 20);
console.log(`Test 10: Is string1 equal to 'apple' or string2 equal to 'Banana'? I predict True.`, string1 == 'apple' || string2 == 'Banana');
console.log(`Test 11: Is 'banana' in the fruits array? I predict True.`, fruits.includes('banana'));
console.log(`Test 12: Is 'orange' not in the fruits array? I predict True.`, !fruits.includes('orange'));
