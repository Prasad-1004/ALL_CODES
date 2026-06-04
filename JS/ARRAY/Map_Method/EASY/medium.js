//1. Add “Mr.” before every name

let names = ["John", "Jane", "Alex"]

console.log(names.map(e=> `Mr. ${e}`));


// 2. Convert all numbers into square root (approx)

let roots = [4, 9, 16, 25]

console.log(roots.map(e=> Math.sqrt(e)));



// 3. Add index to each element
// ["A", "B", "C"]

// Output:

// ["0-A", "1-B", "2-C"]



let a = ["A", "B", "C"];

let result = a.map((item, index) => `${index} ${item}`);

console.log(result);


// 4. Convert boolean to string
// [true, false, true]


let aa = [true, false, true]

console.log(aa.map(e=> String(e)));


// 5. Extract first letter of each name

let naam = ["John", "Jane", "Alex"]

console.log(naam.map(e=> e[0]));