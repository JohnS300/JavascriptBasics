//Creating object1
const person1 = {
    firstName : "Jay",
    lastName : "Don",
    fullName : function (){
        return this.firstName + ' ' + this.lastName;
    },
};

//Transforming an Oject to JSON
let objectToJson= JSON.stringify(person1);
console.log(objectToJson);

//Transforming JSON to an Object
let jsonToObject= JSON.parse(objectToJson);
console.log(jsonToObject.firstName);