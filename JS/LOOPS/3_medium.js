// Print the first 10 numbers of the Fibonacci Series using a loop (0, 1, 1, 2, 3, 5, 8...).
let a = 0;

let b = 1;

let c;

console.log(a);
console.log(b);

for (let i = 1; i <= 8; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}

// Take an array as input and use a loop to find the Maximum number from the array.
// // Use a loop to find the Minimum number from an array.

let arr = [10, 20, 30, 40, 50];
let max = arr[0];
let min = arr[0];

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] > arr[0]) {
    max = arr[i];
  } else if (arr[i]<arr[0]){
    min = arr[i]
  }
}
console.log(max);
console.log(min);




// Prime number

let nos = 13;
let isPrime = true;

for (let i = 2; i < nos; i++) {

    if (nos % i === 0) {
        isPrime = false;
        break;
    }

}

if (isPrime) {
    console.log("It's a Prime number");
}
else {
    console.log("It's not a Prime number");
}


// Check whether a string is a Palindrome using a loop (a word that remains the same when reversed, like "madam").



let word = "madam";

let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++) {

    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }

}

if (isPalindrome) {
    console.log("It is a Palindrome");
}
else {
    console.log("It is not a Palindrome");
}







// Use a loop to reverse an input string without using the built-in reverse function (Example: "hello" → "olleh").


let cont = "Jit";

let reverse = "";

for(let i = cont.length - 1; i >= 0; i--) {
    reverse = reverse + cont[i];
}

console.log(reverse);


// Take an array as input and use a loop to calculate the Average of all elements in the array.


let arrs = [10,20,30,40,50];
let sum = 0

for(let i = 0; i<= arrs.length-1; i++){
  sum = sum + arrs[i]
}

let nums = arrs.length;

let avg = sum/nums

console.log(avg);

// Use nested loops to print a 3 × 3 grid of stars (*).


for(let i = 1 ; i<=3; i++){
  let star = ""
  for (let j = 1; j<=3; j++){
    star += "* "
    
  }
  console.log(star);
}


// Print a star pattern in the shape of a right-angled triangle using loops.

for (let i = 1 ; i<=3; i++){
  let app = ""
  for(let j = 1; j<= i; j++){
    app = app + "*"
  }
  console.log(app);
}




// Reverse star pattern

for (let i = 4; i >= 1; i--) {

    let apps = "";

    for (let j = 1; j <= i; j++) {
        apps += "*";
    }

    console.log(apps);
}



// Remove all duplicate values from an array and create a new array with only unique values using only loops and if-else statements.

let marvel = [10,20,30,40,10,50,20,60]

