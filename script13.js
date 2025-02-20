// // map

// const arr = [5, 1, 3, 2, 6];

// // Double - [10, 2, 6, 4, 12]

// // Triple - [15, 3, 9, 6, 18]

// // Binary - ["101", "1", "11", "10", "110"]

// function double(x) {
//     return x *2;
// }

// function triple(x) {
//     return x * 3
// }

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(binary);

// console.log(output);

// // another method

// const output = arr.map(function binary(x) {
//     return x.toString(2);
// });

// console.log(output);

// // arrow fn
// const output = arr.map((x) => {
//     return x.toString(2);
// });

// console.log(output);

// const output = arr.map((x) => x.toString(2));

// console.log(output);


// // filter

// const arr = [5, 1, 3, 2, 6];

// // filter odd values

// function isOdd(x) {
//     return x % 2;
// }

// const output = arr.filter(isOdd);

// console.log(output);

// // filter even values

// function isEven(x) {
//     return x % 2 === 0;;
// }

// const output = arr.filter(isEven);

// console.log(output);


// // reduce

// const arr = [5, 1, 3, 2, 6];

// // sum or max

// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(output);


const users = [
    { firstName: "prashant", lastName: "gupta", age: 25 },
    { firstName: "sandeep", lastName: "gupta", age: 30 },
    { firstName: "avishek", lastName: "raj", age: 25 },
    { firstName: "vishal", lastName: "anand", age: 23 },
    
];

// // list of full names
// // ["prashant gupta", "sandeep gupta" ...]

// const output = users.map((x) => x.firstName + " " + x.lastName);

// console.log(output);

// // acc = { 25 : 2, 30: 1, 23: 1 }

// const output = users.reduce(function(acc, curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});

// console.log(output);

const output = users.filter((x) => x.age < 30);

console.log(output);
