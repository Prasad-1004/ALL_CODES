let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

// Factorial using while loop

let i = 5;
let fact = 1;
while (i > 1) {
  fact = fact * i;
  i--;
}
console.log(fact);

// Loop from 1 to 15, but stop when number is 5

for (let i = 1; i <= 15; i++) {
  console.log(i);
  if (i == 5) break;
}

// Loop from 1 to 10, skip number 5 (continue).

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}


// Use do-while loop to print "Hello World" at least once.

do {
    console.log("Hello World");
}
while (false)






// Print array ['apple', 'banana', 'cherry'] in reverse order using loop.


let arr2 = ['apple', 'banana', 'cherry'];

for(let i = arr2.length-1 ; i>=0; i--){
    console.log(arr2[i]);
}



// Print multiples of 5 between 1 to 50.

for(let i = 1 ; i<=50 ; i++) {
    if(i%5==0){
        console.log(i);
    }
}



// Print each character of "javascript" in a new line.

let char = "javascript";
let char2 = [...char]



for(let i = 0;i<=char2.length-1;i++ ){
    console.log(char2[i]);
}



// Count array elements without using .length.

let arr3 = [10, 20, 30, 40, 50];

let count = 0;

for (let i = 0; arr3[i] !== undefined; i++) {
    count++;
}

console.log(count);



// Print squares of numbers from 1 to 10.


for(let i = 1; i<=10 ; i++){
    // console.log(i*i);
    console.log(i ** 2);
}




// Find sum of numbers from 20 to 30.
let sum = 0

for(let i = 20 ; i<=30 ; i++){
    sum = sum + i;
}
console.log(sum);


// Find sum of even numbers from 1 to 30.

let sums = 0;
for(let i = 1; i<=30; i++){

    if (i%2 == 0){
        sums = sums + i;
    }
    
}

console.log(sums);


// Count how many 'a' are in a string.

let word = "Prasad";
let counts = 0;
let words = [...word];

for(let i = 0 ; i<=words.length-1;i++){
    if(words[i]==='a'){
        counts++;
    }

}
console.log(counts);


// Stop loop immediately if a negative number is found in an array.

let arrs = [10,20,-30,40,50]

for(let i = 0; i<=arrs.length-1;i++){
    if(arrs[i]<0){
        break
    }
    
        console.log(arrs[i]);
}