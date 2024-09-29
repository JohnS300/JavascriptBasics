const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  console.log(text);
  if (i == (cars.length - 1)){
    i++;
    continue;
  }
  text +=', ';
  i++;
}

console.log(text);