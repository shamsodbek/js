// let chess = ""
// for ( let i = 0; i < 8; i++ ){
//     for (let j = 0; j < 1; j++ ){
//         if (i % 1 == 0 && j % 2 ==1 || i % 2 == 1 && j % 2 == 0){
//             chess += "@"
//         }else{
//             chess += "&"
//         }

//     }
//     console.log(chess);
//     chess = "";
// }


// let text = "a,b,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z,o',g',sh,ch,ng."
// let box = ""

// for (let i = "a"; i < "ng"; i++) {
//     if (i = "a") {

//         box = "a   e   i   o   u   o'."
//     }else if (i == "b"){
//         box = "b,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,y,z,,g',sh,ch,ng"
        
//     }
//     console.log(box)
// }










//Math.random  Tasodifiy raqamlar 0-dan  cheksz
//Math.floor Pastga qarab yaxlitlaydi
//Math.ceil tepaga qarab yaxlitlaydi
//Math.round




// function random(max, min){

//     return Math.round(Math.random() * (max-min)+min)
// }
// console.log(random (1,10));





let a = +prompt('Dioganal sonni kiriting');
let chess = ""
for ( let i = 0 ; i < a ; i++ ){
    for (let j = 0  ; j < a; j++ ){
        if ( i == j || i == 0 || j == 0 || i == a -1 || j == a -1 || j == a -1-i){
            chess += "❤️"
        }else if ( a%2 == 0 , chess ++ ){

        }
         else{
            chess += "🤍"
        }
    }
    console.log(chess);
    chess = "";
}