// Freeze a variable (Object.freeze example).

const person = {
  name: "Prasad",
  age: 25
};

Object.freeze(person);

person.age = 30;   // change korar try
person.city = "Kolkata"; // new property add
delete person.name; // delete korar try

console.log(person);