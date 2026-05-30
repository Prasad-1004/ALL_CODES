// PRINT NUMBER FROM 1 TO 10

let num = () => {
    for (let i=1;i<=10;i++){
        console.log(i);
    }
}

// num();

// Print all even numbers from 1 to 50

 let even  = () =>{
    for(let i=1;i<=50;i++){
        if(i%2==0){
            console.log(i);
        }
    }
 }

//  even();

//  FIND THE SUM OF NUMBERS FROM 1 TO 100

let add = 0

let sum = () =>{
    for (let i=1;i<=100;i++){
        add = add + i
    }

    console.log(add);

}

// sum()

// multiplicationn table of 5

for (let i = 1 ;i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`);
}


// count how many numbers are divisible by 3 between 1 - 100


let count = 0;
for(let i = 1;i<=100;i++){
    if(i%3==0){
        count++;
    }

}

console.log(count);


// Prime number

let nums  = 15;

let isPrime = true;

for (let i = 2; i < nums; i++){
    if (nums % i == 0){
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("It's a prime number");
} else {
    console.log("It's not a prime number");
}


// Find the sum of all elements in an array


let arr = [1,2,3,4,5];
let sums = 0;

for(let i = 0 ; i<arr.length; i++){
    sums = sums + arr[i]
}

console.log(sums);

// Find the largest number in an array

let pot = arr[0];
let pots = arr[0]

for(let i = 0 ; i<arr.length; i++){
    
    if(arr[i]>pot){
        pot = arr[i]
    }
}

for(let i = 0 ; i<arr.length; i++){
    
    if(arr[i]<pots){
        pots = arr[i]
    }
}

console.log(`Max number is : ${pot} & Min number is : ${pots}`);
