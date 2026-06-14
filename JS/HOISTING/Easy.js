// 1.

console.log(a);
var a = 10;

// Output will be undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 2.

var name = "John";

function showName() {
  console.log(name);
}

showName();

// output will be John

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.

console.log(age);

var age;
age = 25;

console.log(age);

// Output :  First output will be undefined , second output will be 25

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4.

// console.log(city);

let city = "London";

// output : Error (TDZ)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5.

// console.log(country);

const country = "India";

// output : Error (TDZ)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 6.

var x = 5;

function test() {
  console.log(x);
}

test();    // Output :   x = 5

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 7.

function greet() {
  console.log("Hello");
}

greet();

//Output :  Hello

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 8.

// hello();

// function hello() {
//   console.log("Hi");
// }

// Output : Hi
//  It is  valid. This works because function declarations are completely hoisted in JavaScript.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 9.

var a = 10;

function demo() {
  console.log(a);
}

demo();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 10.

// hello();

var hello = function () {
  console.log("Hello");
};

// OUTPUT : TypeError: hello is not a function

// EXPLANATION:

// This is a function expression, not a function declaration.

// During the creation phase, JavaScript hoists the var hello declaration and initializes it with undefined.

// Internally, it behaves like this:

// var hello;

// hello(); // hello is undefined here

// hello = function () {
//   console.log("Hello");
// };


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 11.

var x = 20;

function example() {
  var x = 10;
  console.log(x);
}

example();

// Output : 10


// 12.

var aa;

console.log(aa);

// Output : undefined


// 13.


// console.log(score);

// score = 100;


// Output : error (Score is not defined)




// 14.

function add() {
  return 5 + 5;
}

console.log(add());

// output : 10



15.

console.log(test);

function test() {
  return "JavaScript";
}

// Output: [Function: test]



// 16.

var number = 10;

function check() {
  console.log(number);
  var number = 5;
}

check();

// Output : undefined (var supports hoisted)





// 17.

var aaa = 1;

function test() {
  console.log(aaa);
  aaa = 5;
}

test();

console.log(aaa);

// Output : 1 and 5





// 18.

console.log(aaaa);

let aaaa;




// 19.

// console.log(xx);

// const xx = 20;


// 20.

// Explain:

// var
// let
// const
// function declaration
// function expression