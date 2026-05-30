// Find the both max and min in one loop



let arr = [1,2,3,4,5,6,7,8,9]

let max = arr[0]
let min = arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]<min) {
        min = arr[i]
    }
}

console.log(`Max number2 is : ${max} & Min number is : ${min}`);