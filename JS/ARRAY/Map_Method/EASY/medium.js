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


//6. Create sentence
// ["I", "Love", "JS"]

// Output:

// ["I!", "Love!", "JS!"]

// let arr = ["I", "Love", "JS"];

// let result = arr.map(item => item + "!");

// console.log(result);


let arr = ["I", "Love", "JS"];

let result = arr.map(item => item + "!");

console.log(result);





// 7. Add 100 bonus marks

// marks property ta access korte hobe.

// let arr = [
//   { name: "A", marks: 50 },
//   { name: "B", marks: 60 }
// ];

// let result = arr.map(item => {
//   return {
//     name: item.name,
//     marks: item.marks + 100
//   };
// });

// console.log(result);



// 8

let employees = [
  { name: "Rahul", salary: 20000 },
  { name: "Priya", salary: 30000 }
];

let updatedEmployees = employees.map(employee => {
  return {
    name: employee.name,
    salary: employee.salary + 5000
  };
});

console.log(updatedEmployees);



// 9. convert age to  voting status

// [
//   "John - Not Eligible",
//   "Jane - Eligible"
// ]

let user = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 }
]

console.log(user.map(e=> {
  return `${e.name} - ${e.age>18?'Eligible':'Not Eligible'}`
})); 


// 10. Extract usernames in lowercase
// [
//   { username: "JOHN123" },
//   { username: "JANE456" }
// ]



let bc =  [
  { username: "JOHN123" },
  { username: "JANE456" }
]

console.log(bc.map(e => e.username.toLowerCase()));











// 11. Multiply index * value
// [10, 20, 30]

// Output:

// [0, 20, 60]



let nos = [0,20,60];

console.log(nos.map((number, index)=> number*index));






// 12. Convert to object format
// ["apple", "banana"]

// Output:

// [
//   { item: "apple" },
//   { item: "banana" }
// ]

let fruit = ["apple", "banana"];

console.log(fruit.map(e => {
  return {
    item: e
  };
}));






// 13. Add “₹” before prices
// [100, 200, 300]


let price = [100,200,300];

console.log(price.map(e => `₹${e}`));


// 14. Full name combine
// [
//   { first: "John", last: "Doe" },
//   { first: "Jane", last: "Smith" }
// ]

let full = [
  { first: "John", last: "Doe" },
  { first: "Jane", last: "Smith" }
];

console.log(
  full.map(e => {
    return {
      fullName: e.first + " " + e.last
    };
  })
);


// 15. Mark pass/fail
// [
//   { name: "A", marks: 40 },
//   { name: "B", marks: 80 }
// ]

// Output:

// [
//   "A - Fail",
//   "B - Pass"
// ]


let students = [
  { name: "A", marks: 40 },
  { name: "B", marks: 80 }
];

console.log(
  students.map(student => {
    return `${student.name} - ${student.marks >= 50 ? "Pass" : "Fail"}`;
  })
);











// 16. Convert string length
// ["apple", "banana", "kiwi"]
// 17. Add category field
// [
//   { item: "Laptop" },
//   { item: "Shirt" }
// ]

// Output:

// [
//   { item: "Laptop", category: "Electronics" },
//   { item: "Shirt", category: "Clothing" }
// ]
// 18. Reverse each word
// ["js", "react", "html"]



// 19. Add currency format
// [1000, 2000, 3000]

// Output:

// ["$1000", "$2000", "$3000"]


let arr = [1000, 2000, 3000];

let result = arr.map(item => `$${item}`);

console.log(result);


// 20. Final Boss 🔥 (React Level)

// Convert this:

// [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 2" }
// ]

// To:

// [
//   "<div>Post 1</div>",
//   "<div>Post 2</div>"
// ]


let posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" }
];

let result = posts.map(item => `<div>${item.title}</div>`);

console.log(result);