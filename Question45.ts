//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. 

interface Car { 
    manufacturer: string; 
    modelName: string; 
    color?: string; 
    optionalFeature?: string; 
} 
 

function createCar(manufacturer: string, modelName: string, options: Partial<Car> = {}): Car { 
    const car: Car = { 
        manufacturer, 
        modelName, 
        ...options 
    }; 
    return car; 
} 
 

const myCar = createCar('Toyota', 'Camry', { color: 'Blue', optionalFeature: 'Sunroof' }); 
 

console.log(myCar);