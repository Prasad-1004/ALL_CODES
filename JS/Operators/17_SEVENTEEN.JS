// Find maximum using nested ternary.



let a = 10;
let b = 25;
let c = 15;

let max = (a > b) 
            ? (a > c ? a : c) 
            : (b > c ? b : c);

console.log(max);