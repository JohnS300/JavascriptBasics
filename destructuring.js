//Destructuring does not change the original object. You simply export the values of an objectinto their own variables.
const person1 = {
    firstName : "Jay",
    lastName : "Don",
    fullName : function (){
        return this.firstName + ' ' + this.lastName;
    },
};

//Simple destructure
//let {firstName , lastName} = person1;
//console.log(firstName, lastName);

//Destructure with default values for missing properties
let {firstName , lastName, country = 'US', age = 19} = person1;
console.log(firstName, lastName , country);

