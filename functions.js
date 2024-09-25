let name = 'Max';
let age = 30;
let hashobbies = true;

//Normal function
function sumamrizeUSer (userName, userAge, userHasHobbies) {
  return (
    "User's name is " +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobbies
  );
}

//Anonymous function
const sumamrizeUSer1 = function (userName, userAge, userHasHobbies) {
    return (
      "User's name is " +
      userName +
      ', age is ' +
      userAge +
      ' and the user has hobbies: ' +
      userHasHobbies
    );
  }

//Arrow function
const sumamrizeUSer2 =  (userName, userAge, userHasHobbies) => {
    return (
      "User's name is " +
      userName +
      ', age is ' +
      userAge +
      ' and the user has hobbies: ' +
      userHasHobbies
    );
  }

//functions add and add1 are the same but written in different, shorter syntax
const add = (a,b) =>{
    return a + b;
}
const add1 = (a,b) => a + b ;

//functions add2 and add3 are the same but written in different, shorter syntax. add3 syntax is the most commonly used when the variable is only one
const add2 = (a) => a + 1 ;
const add3 = a => a + 1 ;


const addNumbers = () => 5 + 5;


console.log(sumamrizeUSer(name,age,hashobbies))
console.log(sumamrizeUSer1(name,age,hashobbies))
console.log(sumamrizeUSer2(name,age,hashobbies))
console.log(add1(10,9))
console.log(add4(15))
console.log(sumamrizeUSer(name,age,hashobbies));
