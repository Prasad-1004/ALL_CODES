// FIND THE SUM OF ALL ELEMENTS IN A GIVEN NUMERIC ARRAY

const arr = [1,2,3,4,5]

let result  =  arr.reduce((sum,num)=>{
     return sum + num  },0) ;

    console.log(result);

// sum = previous accumulated value
// num = current array element
// 0 = initial value