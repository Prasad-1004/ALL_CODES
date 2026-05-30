// Reverse an array without using reverse().

let arr = [10,20,30,40,50]

let reversed = []

for(let i = arr.length-1 ; i>=0; i--){
    reversed.push(arr[i]);
}

console.log(reversed);




// Print an array from last index to first index.



console.log(arr.reverse());




// Create a new reversed array from an existing array.

let arrs = [1,2,3,4,5,6,7,8,9]

let news = arrs.reverse()

console.log(news);


// Reverse only the first half of an array.


// let arrs = [1,2,3,4,5,6,7,8,9]

let newa = []

// First half reverse
for(let i = (Math.floor(arrs.length / 2)) - 1; i >= 0; i--){
    newa.push(arrs[i])
}

// Remaining part same order
for(let i = Math.floor(arrs.length / 2); i < arrs.length; i++){
    newa.push(arrs[i])
}

console.log(newa)


// Reverse an array using a loop and swap logic.