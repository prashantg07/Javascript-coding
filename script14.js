
// console.log("Namaste");

// setTimeout(function () {
//     console.log("Javascript");
// },5000)


// console.log("Season 2");

// //callback hell
// const cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function () {

//     api.proceedToPayment(function () {

//         api.showOrderSummary(
            
//             function () {
//                 api.updateWallet()
//             }
//         )
//     })
// })


const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
    api.proceedToPayment()

})


