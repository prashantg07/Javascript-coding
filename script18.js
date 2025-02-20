// * What is async ?
// * What is await ?
// * How async await works behind the scenes ?
// * Examples of using async/await 
// * Error Handling
// * Interviews
// * Async await vs Promise.then/.catch

// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!!");
// });

// // always returns a promise
// async function getData() {
//     return p;
// }

// const dataPromise = getData();

// dataPromise.then(res => console.log(res));



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!");
//     }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!");
//     }, 10000);
// });


// // await can only be used inside an async function
// async function handlePromise() {
//     console.log("Hello World!!");
//     // JS Engine was waiting for promise to resolved
//     const val = await p1;
//     console.log("Namaste JavaScript");
//     console.log(val); 

//     const val2 = await p2;
//     console.log("Namaste JavaScript 2");
//     console.log(val2); 
// }
// handlePromise();

// function getData() {
//     // JS Engine will not wait for promise to be resolved
//     p.then((res) => console.log(res));
    
//     console.log("Namaste JavaScript");
// }

// getData();



const API_URL = "https://api.github.com/users/prashantg07";

// await can only be used inside an async function
async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    // fetch() => Response.json() => jsonValue
}
handlePromise();


// // Error handling
// const API_URL = "https://invalidrandomurl";
// // await can only be used inside an async function
// async function handlePromise() {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
// }
// handlePromise().catch((err) => console.log(err));

