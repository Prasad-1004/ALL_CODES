// Write a function to add two numbers


let add = (a,b) => {
    return(a+b); 
}

console.log( add(2,3) );




// Write a function to check even or odd


function check(a) {
    if(a%2 == 0){
        return `${a} is even number`
    }
    else 
        return `${a} is odd number`
}

console.log(check(5));




// Write a function to reverse a string

function rev(a) {
    return a.split('').reverse().join('');
}

console.log(rev('Jit'));



// Write a function to find sum of an array

let sums = (a) => {
    let add = 0

    for(let i = 0; i<= a.length-1; i++){
        add += a[i];
    }

    return add
}

console.log(sums([1,2,3]));


// Write a function to find factorial of a number


let fact = (a) => {

    let ans = 1;
    for(let i = a; i>=1; i--){
        ans = ans*i
    }
    return ans;
}

console.log(fact(5));


// Write a function to find maximum of 3 numbers
// Write a function to check palindrome string
// Write a function to convert Celsius to Fahrenheit
// Write a function to check if a number is prime
// Write a function to filter even numbers from an array