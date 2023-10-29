const productList = {
    meat: {
        price: 85000,
        weight: 2,
    },
    oil:{
        price: 65000,
        amount: 1,
    },
    onion:{
        price: 10000,
        weight: 2,
    },
    rice:{
        price: 25000,
        weight: 3,
    },
    carrot:{
        price: 10000,
        weight: 3,
    },
    cocacola:{
        price: 15000,
        amount: 6,
    },
    fanta:{
        price: 15000,
        amount: 6,
    },
    bliss:{
        price: 12000,
        amount: 5,
    },
    choyxona:{
        price: 300000
    }
}


let totalPrice = 0
for (const key in productList) {
    totalPrice += productList[key].price * (productList[key].weight ? productList[key].weight : productList[key].amount)
}
console.log(totalPrice);




// function totalSummProduct() {
//     let totalSumm = 0


//     for (const key in productList){
//         totalSumm += productList [key].price * (productList[key].weight ? productList[key].weight : productList[key].amount)
//     }
    
    
// }
// console.log(totalSumm);

