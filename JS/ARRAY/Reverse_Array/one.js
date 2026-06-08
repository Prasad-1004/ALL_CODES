// Reverse an array without using reverse().

let arr = [1, 2, 3, 4];
let newarr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  newarr.push(arr[i]);
}

console.log(arr);
console.log(newarr);

// Print an array from last index to first index.

arr = arr.reverse();
console.log(arr);

// Reverse only the string elements.

// Input: ["apple", "banana", "mango"]

// Output:

// ["elppa", "ananab", "ognam"]

let fruits = ["apple", "banana", "mango"];
let result = [];

for (let i = 0; i < fruits.length; i++) {
    let reversed = "";

    for (let j = fruits[i].length - 1; j >= 0; j--) {
        reversed += fruits[i][j];
    }

    result.push(reversed);
}

console.log(result);










// Check if an array is palindrome.

// [1, 2, 3, 2, 1] => true

// [1, 2, 3, 4] => false


let nos = [1, 2, 3, 2, 1];

let new_nos = [];

// reverse copy
for (let i = nos.length - 1; i >= 0; i--) {
    new_nos.push(nos[i]);
}

// compare
let isPalindrome = true;

for (let i = 0; i < nos.length; i++) {
    if (nos[i] !== new_nos[i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("It is Palindrome array");
} else {
    console.log("It is not a Palindrome array");
}




// Reverse every word in an array.

// Input:
// ["hello world", "good boy"]

// Output:
// ["olleh dlrow", "doog yob"]


let inp = ["hello world", "good boy"];

let newinp = [];

for (let i = 0; i < inp.length; i++) {
    let str = inp[i];
    let reversed = "";

    for (let j = str.length - 1; j >= 0; j--) {
        reversed += str[j];
    }

    newinp.push(reversed);
}

console.log(newinp);