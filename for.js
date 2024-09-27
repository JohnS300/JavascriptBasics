//Use for in statement to loop through the properties of an Object

//object
const person = {
    name : 'ann' ,
    surname : 'griffin',
    age : 32 ,
    profession : 'HR' , 
    character : 'sucks',
}

//for in statement
for (let x in person){
    console.log(person[x]);
};

