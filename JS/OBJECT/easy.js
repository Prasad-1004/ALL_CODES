

// ## 🟢 Easy Level

// ### 1. Print Object Properties

// Given:

// ```js
// const person = {
//   name: "John",
//   age: 25,
//   city: "London"
// };
// ```

// Output:

// ```js
// John
// 25
// London
// ```


const person = {
  name: "John",
  age: 25,
  city: "London"
};

Object.values(person).forEach(value => {
  console.log(value);
});



// ---

// ### 2. Add a New Property

// ```js
// const car = {
//   brand: "Toyota",
//   model: "Corolla"
// };
// ```

// Add:

// ```js
// year: 2024
// ```

// Final object:

// ```js
// {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2024
// }
// ```

const car = {
  brand: "Toyota",
  model: "Corolla"
};

// car.year = 2024;

// console.log(car);                         Easiest way


let newCar = {...car , year:2024}

console.log(newCar);                      // React Approach












// ---

// ### 3. Update Property Value

// ```js
// const student = {
//   name: "Alice",
//   marks: 70
// };
// ```

// Update marks to `90`.

// ---


const student = {
  name: "Alice",
  marks: 70
};

student.marks = 90;

console.log(student);






// ### 4. Delete a Property


// const user = {
//   username: "admin",
//   password: "12345"
// };


// Delete password property.




const user = {
  username: "admin",
  password: "12345"
};


delete user.password ;
console.log(user);





// ---

// ### 5. Check Property Exists

// ```js
// const book = {
//   title: "JavaScript Guide",
//   pages: 500
// };
// ```

// Check whether `"pages"` exists.

// Expected:

// ```js
// true
// ```


const book = {
  title: "JavaScript Guide",
  pages: 0
};


if("pages" in book && book.pages>0){
    console.log(true);
}else {
    console.log(false);
}







// ---

// ## 🟡 Medium Level

// ### 6. Count Number of Properties

// ```js
// const employee = {
//   id: 101,
//   name: "Bob",
//   department: "IT",
//   salary: 50000
// };
// ```

// Output:

// ```js
// 4
// ```

// ---

// ### 7. Print All Keys

// Output:

// ```js
// ["id", "name", "department", "salary"]
// ```

// ---

// ### 8. Print All Values

// Output:

// ```js
// [101, "Bob", "IT", 50000]
// ```

// ---

// ### 9. Loop Through Object

// ```js
// const product = {
//   name: "Laptop",
//   price: 50000,
//   brand: "HP"
// };
// ```

// Output:

// ```js
// name : Laptop
// price : 50000
// brand : HP
// ```

// ---

// ### 10. Sum All Numeric Values

// ```js
// const scores = {
//   math: 80,
//   english: 75,
//   science: 90
// };
// ```

// Output:

// ```js
// 245
// ```

// ---

// ### 11. Find Highest Value

// ```js
// const marks = {
//   John: 80,
//   Jane: 95,
//   Alex: 88
// };
// ```

// Output:

// ```js
// Jane
// 95
// ```

// ---

// ### 12. Convert Object into Array

// ```js
// const user = {
//   name: "John",
//   age: 30
// };
// ```

// Output:

// ```js
// [
//   ["name", "John"],
//   ["age", 30]
// ]
// ```

// ---

// ## 🟠 Medium-Hard

// ### 13. Count Occurrences Using Object

// Array:

// ```js
// ["apple", "banana", "apple", "orange", "banana", "apple"]
// ```

// Output:

// ```js
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
// ```

// ---

// ### 14. Find Most Frequent Element

// Array:

// ```js
// ["a", "b", "a", "c", "a", "b"]
// ```

// Output:

// ```js
// a
// ```

// ---

// ### 15. Invert Key and Value

// Input:

// ```js
// {
//   a: 1,
//   b: 2,
//   c: 3
// }
// ```

// Output:

// ```js
// {
//   1: "a",
//   2: "b",
//   3: "c"
// }
// ```

// ---

// ### 16. Merge Two Objects

// Input:

// ```js
// const obj1 = {
//   name: "John"
// };

// const obj2 = {
//   age: 25
// };
// ```

// Output:

// ```js
// {
//   name: "John",
//   age: 25
// }
// ```

// ---

// ### 17. Find Common Keys

// ```js
// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// const obj2 = {
//   b: 20,
//   c: 30,
//   d: 40
// };
// ```

// Output:

// ```js
// ["b", "c"]
// ```

// ---

// ## 🔴 Hard Level

// ### 18. Group People by Age

// Input:

// ```js
// const people = [
//   { name: "John", age: 20 },
//   { name: "Jane", age: 20 },
//   { name: "Alex", age: 25 }
// ];
// ```

// Output:

// ```js
// {
//   20: ["John", "Jane"],
//   25: ["Alex"]
// }
// ```

// ---

// ### 19. Convert Array to Object

// Input:

// ```js
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" }
// ];
// ```

// Output:

// ```js
// {
//   1: { id: 1, name: "John" },
//   2: { id: 2, name: "Jane" }
// }
// ```

// ---

// ### 20. Deep Property Access

// Input:

// ```js
// const user = {
//   profile: {
//     address: {
//       city: "Kolkata"
//     }
//   }
// };
// ```

// Print:

// ```js
// Kolkata
// ```

// Without causing error if any level is missing.

// ---

// ### 21. Flatten Nested Object

// Input:

// ```js
// {
//   user: {
//     name: "John",
//     age: 25
//   }
// }
// ```

// Output:

// ```js
// {
//   "user.name": "John",
//   "user.age": 25
// }
// ```

// ---

// ### 22. E-commerce Style Problem ⭐

// Input:

// ```js
// const products = [
//   { category: "Electronics", price: 500 },
//   { category: "Electronics", price: 700 },
//   { category: "Clothing", price: 300 }
// ];
// ```

// Output:

// ```js
// {
//   Electronics: 1200,
//   Clothing: 300
// }
// ```

// Category-wise total price calculate korte hobe.

// ---

// ### 23. Student Result System ⭐

// Input:

// ```js
// const students = {
//   John: 85,
//   Jane: 92,
//   Alex: 70,
//   Bob: 60
// };
// ```

// Output:

// ```js
// {
//   passed: ["John", "Jane", "Alex"],
//   failed: ["Bob"]
// }
// ```

// (70+ = Pass)

// ---

// ### 24. Nested Product Inventory ⭐⭐⭐

// Input:

// ```js
// const inventory = {
//   electronics: {
//     laptop: 5,
//     phone: 10
//   },
//   clothing: {
//     shirt: 20,
//     pant: 15
//   }
// };
// ```

// Output:

// ```js
// 50
// ```

// Total stock count.

// ---

// Ei 24 ta korle object er:

// * property access
// * add/update/delete
// * Object.keys()
// * Object.values()
// * Object.entries()
// * for...in
// * nested object
// * frequency counter
// * grouping
// * object transformation

// sob solid hoye jabe.

// React er age object e strong hote hole **13, 14, 18, 19, 22, 23, 24** must solve korbi. 🚀
