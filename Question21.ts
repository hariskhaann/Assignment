//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items

let cities: { name: string, country: string, population: number }[] = [     { name: "Tokyo", country: "Japan", population: 37797531 },     { name: "New York", country: "USA", population: 8419600 },     { name: "London", country: "United Kingdom", population: 8982256 },     { name: "Beijing", country: "China", population: 21707000 },     { name: "Sydney", country: "Australia", population: 5230330 } 
]; 
 

for (let i = 0; i < cities.length; i++) {     
    console.log(`City: ${cities[i].name}, Country: ${cities[i].country}, Population: ${cities[i].population}`)};
