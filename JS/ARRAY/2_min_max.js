// Find the maximum and minimum elements in an array

const arr = [10,20,30,40,50]

let result = arr.reduce((max, num) => {
    if (num> max){
        return num
    }
    else 
        return max
})

console.log(result);

