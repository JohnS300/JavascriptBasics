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

let x = person1.fullName.call(person2);
console.log(x);
