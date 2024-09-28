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

console.log('\nDoing a little experiment.\n')

const objectarray = [];

//doing this with Keys for fun
for (let z=0; z < Object.keys(person).length; z++){
    objectarray.push(person[Object.keys(person)[z]]);
    console.log(objectarray[z]);
}

const objectarray2 = [];

//doing this like a normal human
for (value of Object.values(person)){
    objectarray2.push(value);
    console.log(value);
}

console.log(objectarray2.join('\n'));

console.log('\nFinding a solution to my question\n')
//this way might be more usefull
for (value of Object.values(person)){
    objectarray2.push(value);
    console.log(objectarray2[objectarray2.length-1]);
}