// Explain pass by value vs reference with example.

// PASS BY VALUE

function changeValue(x) {
  x = 20;
}

let a = 10;

changeValue(a);

console.log(a);


// PASS BY REFERENCE

function changeName(obj) {
  obj.name = "Rahul";
}

let person = { name: "Prasad" };

changeName(person);

console.log(person.name);