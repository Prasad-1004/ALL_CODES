//1. Create a new array where every number is doubled.

let arr = [1, 2, 3, 4, 5];

let result = arr.map((num) => num * 2);

console.log(result);

//2. Create a new array where every number is multiplied by 10.

let multi = arr.map((num) => num * 10);

console.log(multi);

//3. Convert all strings to uppercase.

let newarr = ["apple", "banana", "mango"];

console.log(newarr.map((nam) => nam.toUpperCase()));

//4. Convert all strings to lowercase.

let raw = ["HELLO", "WORLD", "JS"];

console.log(raw.map((nam) => nam.toLocaleLowerCase()));

//5. Add 5 to every number

console.log(arr.map((nam) => nam + 5));

//6. Convert every number into a string

console.log(arr.map((nam) => nam.toString()));

//7. Return the length of each word

console.log(newarr.map((nam) => nam.length));

//8. Square every number.

console.log(arr.map((nam) => nam ** 2));

//9. Extract all names from the objects.

let obj = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

console.log(obj.map(nam=>nam.name));

console.log(obj.map(nam=>nam.age));



//10. Create a new array of greetings.

let a = ["John", "Jane", "Bob"]

console.log(a.map(nam=> `Hello ${nam}`));



//11. Add a new property isAdult: true to every object.

let b = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
]

console.log(b.map(nam=>
({...nam,
    isAdult:true})
));


//12. Create a new array containing:

// "Name: John"
// "Name: Jane"

// from

// [
//   { name: "John" },
//   { name: "Jane" }
// ]



let mas =  [
  { name: "John" },
  { name: "Jane" }
]

let newa = mas.map(e=> `Name: ${e.name}` )
console.log(newa);



//13. Convert prices to strings with a dollar sign.

let price = [100, 200, 300]

console.log(price.map(e=> `$${e}`));



//14. Add 1 to the index and return:

let oldarr = ["Apple", "Banana", "Mango"]

console.log(oldarr.map((item, index) => {
    return `${index + 1}. ${item}`;
}));













//15. Create an array of full names.

let full = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
]

console.log(full.map(e => `${e.firstName} ${e.lastName}`));




//16. Convert every user object into:

// {
//   username: "john",
//   status: "active"
// }

let marvels = [
  { name: "John" },
  { name: "Jane" }
]

let iron = marvels.map(user=> {
    return{
        username : user.name.toLowerCase(),
        status: "active"
    }
})

console.log(iron);






// 18.

// From this array:

// 

// Return:

// [
//   "Laptop - 50000",
//   "Phone - 20000"
// ]

let products = [
  { product: "Laptop", price: 50000 },
  { product: "Phone", price: 20000 }
]

console.log(products.map(p=>{
   return `${p.product} - ${p.price}`
}));















// 19.

// Create an array containing only birth years.

// Assume current year = 2026.

// [
//   { name: "John", age: 26 },
//   { name: "Jane", age: 30 }
// ]

// Expected:

// [2000, 1996]



let year = 
[
  { name: "John", age: 26 },
  { name: "Jane", age: 30 }
]

let date = new Date().getFullYear()

console.log(year.map(e =>{
    return (date - e.age)
}));




// 20.

// Transform this array:

// [
//   { name: "John", marks: 80 },
//   { name: "Jane", marks: 90 }
// ]

// Into:

// [
//   { name: "John", grade: "A" },
//   { name: "Jane", grade: "A" }
// ]


let marks =  [
  { name: "John", marks: 80 },
  { name: "Jane", marks: 90 }
]

console.log(marks.map(e=>{
    return {
        name : e.name,
        grade: e.marks>80?"A" : "B"
    }
}));


