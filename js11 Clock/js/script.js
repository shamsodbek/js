// const second = document.querySelector('.s'),
//     minut = document.querySelector('.m'),
//     hours = document.querySelector('.h')
//     minhour = document.querySelector('.hours'),
//     minMinutes = document.querySelector('.minutes')



// function clock (){
//     let time = new Date (),
//     hourss = time.getHours()*30,
//     minuts = time.getMinutes()*6,
//     seconds = time.getSeconds()*6


//     second.style.transform = `rotate(${seconds} deg)`
//     hours.style.transform = `rotate(${hourss}deg)`
//     minut.style.transform = `rotate(${minuts}deg)`



//     setTimeout(() => {
//         clock()
//     }, 1000);

//     minhour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours(), 
//     minMinutes.innerHTML= time.getMinutes() < 10 ? '0' + time.getMinutes : time.getMinutes();
    
// }


// clock()

const second = document.querySelector('.s'),
    minut = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minHour = document.querySelector('.hours'),
    minMiunut = document.querySelector('.minutes')


function clock() {
    let time = new Date(),
        hours = time.getHours() * 30,
        Minutes = time.getMinutes() * 6,
        seconds = time.getSeconds() * 6

    second.style.transform = `rotate(${ seconds }deg)`
    minut.style.transform = `rotate(${ Minutes }deg)`
    hour.style.transform = `rotate(${ hours }deg)`

    setTimeout(() => {
        clock()
    }, 1000);

    minHour.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    minMiunut.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
}
clock()


const sekonds = document.querySelector('.stopwatch__seconds'),
    minutec = document.querySelector('.stopwatch__minutes'),
    timec = document.querySelector('.stopwatch__hours'),
    tabsItem = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem'),
    buton = document.querySelector('.stopwatch__btn')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click',()=>{
        tabsItem.forEach((item,j)=>{
            tabsItem[j].classList.remove('active')
            content[j].classList.remove('active')
        })
        tabsItem[i].classList.add('active')
        content[i].classList.add('active')
    })
}


// buton.addEventListener('click',()=>{
//     sekonds.innerHTML++ 


//     setTimeout(() => {
     
        
//     }, 1000);
    
// })
const tabsLink__span = document.querySelector('.tabsLink__span')
buton.addEventListener('click', () => {
    if (buton.innerHTML == 'start') {
        buton.innerHTML = 'STOP';
        if (buton.innerHTML = 'STOP') {
            tabsLink__.classList.add('active');
        }
    }
    else if (buton.innerHTML == 'STOP'){
        buton.innerHTML = 'CLEAR'
        
    }
    else if (buton.innerHTML == 'CLEAR') {
        buton.innerHTML = 'start'
        
    }
})

// if (buton.innerHTML == 'STOP'){
//     tabsLink__span.classList.add('active')
// }
function rec (){
    if (buton.innerHTML == 'STOP'){
     sekonds.innerHTML ++
        
        
        if (sekonds.innerHTML > 2) {
            sekonds.innerHTML = 0
            minutec.innerHTML++
            if (minutec.innerHTML >2){
                timec.innerHTML ++
            }
        }
    } else if (buton.innerHTML == 'start'){
        sekonds.innerHTML =0
        minutec.innerHTML =0 
        timec.innerHTML =0
        
    }


  setTimeout(() => {
      rec()
  }, 1000);
}
rec()











