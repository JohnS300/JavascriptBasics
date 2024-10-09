const Person = require('./class/person');


// Create Source Object
const john = new Person('John',19,'Nepal','Nepalise','Australian','English');
console.log(john.getdetails()+'\n');


const alex = new Person();
//Copies properties from a source object to a target object
Object.assign(alex,john);
//Changing an object property
Object.defineProperty(alex,'name',{
    value : 'Alex',
    writable : true,
});
console.log(alex.getdetails());