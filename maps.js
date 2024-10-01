//first way to create a map
const fruits = new Map([
    ["orange", 555],
    ["apple", 900],
]);

//Second way to create a map
const balls = new Map();

balls.set("baseball",20);
balls.set("football",90);

console.log(fruits.get("orange"));
console.log(balls.get("football"));

console.log('What type is fruits? ' + (typeof fruits));
console.log('Is balls an instance of Map? ' + (balls instanceof Map));

fruits.forEach(function( value, key,){
    console.log(key + ' = ' + value );
});

//The constructor property returns the constructor function for all JavaScript variables.
console.log(fruits.constructor);