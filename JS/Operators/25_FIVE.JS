// Explain memory difference between let, var, const with code.

function testVar() {
  if (true) {
    var a = 10;
  }

  console.log(a);
}

testVar();

// HOISTING

console.log(x);
var x = 5;

// LET

function testLet() {
  if (true) {
    let b = 20;
  }

  console.log(b);
}

testLet();

//HOISTING

console.log(y);
let y = 10;

//CONST

const c = 30;

c = 40;     // ERROR