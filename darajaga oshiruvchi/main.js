var matn = alert("Son kirinting darajaga oshiramz")
var son = +prompt("Sonni kiriting")
let n = 1
while ( isNaN(son) || son == 0){
    son = +prompt("Son kirit")
}
let  number = +prompt('sonni darajasini kirit') 
while (isNaN(number) || number == 0){
    number = +prompt("son kirit")
}
for (let i = 0; i < number; i++){
    n*=number
}
console.log(n);