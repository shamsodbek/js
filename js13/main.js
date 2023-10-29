

// let box = 0

// function basic (sym, n1,n2){
//    if(sym == '+'){
//     box = n1 + n2
//     console.log(box);
//    }else if(sym == '-'){
//     box =  n1- n2;
//        console.log(box);
//    }else if (sym == '*'){
//     box =  n1 * n2;
//        console.log(box);
//    }else if (sym == '/'){
//     box = n1 / n2;
//        console.log(box);
//    }else if (sym == '%'){
//     box = n1 % n2;
//        console.log(box);
//    }
// }
// console.log(basic(  '+',6 , 4));


let box = ''
let box2 = ''

function file (text){

    if (text == 'a' || text== 'i'){
        box++
        console.log(box);
    }else {
        box2 = text;
        console.log(box2);
    }

}
(file(' Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non voluptas temporibus quaerat voluptatum unde harum ea labore, quasi voluptate.'));