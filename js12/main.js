// function add (str){
    
//     const arr = str.split('')
//     arr.forEach((item,i,array) => {
//         return item == ' ' ?  arr.splice(i,1) : item 

//     });
//     const join = arr.join('')
//     join == 'a,e,i,o,u' ? splice(join,1) : join
//     console.log(join);
// }



// console.log(add('Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero provident aliquam aspernatur et cupiditate, eaque animi iste optio temporibus?'));



// //push oxiridan qishadi
// //pop oxiridan ochiradi
// //shift boshidan ochiradi
// //anshift boshidan qoshadi
// //split matini boladi 
// //splice hohlagan joydan ochiradi

const arr = [1,2,3,4,5,6,7,8,9,10]

const add = arr.reduce((prev,current) => prev + current)
console.log(add);

