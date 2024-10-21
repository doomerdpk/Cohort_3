//Normal Function Vs Arrow Functions

// function sum1(a, b) {
//   return a + b;
// }

// console.log(sum1(1, 2));

// const sum2 = (a, b) => {
//   return a + b;
// };

// console.log(sum2(1, 2));

//Map Function
//Problem Statement: Given an array, return a new array that contain elements multiplied by 2 of the first array
//arr=[1,2,3,4,5]  newArr=[2,4,6,8,10]

//Syntax: array.map(transformationFunction)

// const arr = [1, 2, 3, 4, 5];

//Using normal function syntax
// const newArr1 = arr.map(function (i) {
//   return i * 2;
// });

// console.log(newArr1);

//Using Arrow Function Syntax
// const newArr2 = arr.map((i) => i * 2);

// console.log(newArr2);

//Filter Function
//Problem Statement: Given an array, return a new array that contain only even elements from the first array
//arr=[1,2,3,4,5]  newArr=[2,4]

//Syntax: array.filter(filterFunction)

const arr2 = [1, 2, 3, 4, 5];

//Using Normal Function Syntax
const newArr3 = arr2.filter(function (i) {
  //return true or false to include or leave an element from the original array into new array
  return i % 2 == 0;
});

console.log(newArr3);

//Using Arrow Function Syntax
const newArr4 = arr2.filter((i) => i % 2 == 0);

console.log(newArr4);
