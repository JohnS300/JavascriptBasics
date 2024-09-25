//Creating object1
const person1 = {
    firstName : "Jay",
    lastName : "Don",
    fullName : function (){
        return this.firstName + ' ' + this.lastName;
    },
};

//Creating object2
const person2 = {
    firstName : "James",
    lastName : "Tyler",
};

//calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1
let x = person1.fullName.call(person2);
console.log(x);

//The object2 borrows the fullname method from object1
let z = person1.fullName.bind(person2);
console.log(z());
