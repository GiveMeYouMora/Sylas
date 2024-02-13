// let lived = document.getElementsByTagName('div')[0]
// console.log(lived);
// let loved = document.querySelector('.block')
// console.log(loved);
// let luved = document.getElementById('blockid')
// console.log(luved);
// lived.style.height = '200px'
// lived.style.width = '50px'
// lived.style.borderRadius = '10px'
// lived.style.backgroundColor = '#5671a6'
// loved.style.height = '200px'
// loved.style.width = '50px'
// loved.style.borderRadius = '10px'
// loved.style.backgroundColor = '#383838'
// luved.style.height = '200px'
// luved.style.width = '50px'
// luved.style.borderRadius = '10px'
// luved.style.backgroundColor = '#6d8093'

// console.log(lived.classList);
// lived.classList.add('--active')
// loved.classList.remove('fgfdg')

// console.log("One peace")
// var name="73"
// let name_2= "5 6"
// const name_const = "7 8"
// console.log(name, name_2, name_const); 
// let age=prompt("Введите возраст")
// if (age>=18) {
//     "Можно"
// } else {
//     "Нельзя"
// }
// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }
// let a = 0 
// while (a<10) {
//     console.log(a++)
// }
let string = `строка`
let number =28
let bull= false
let nothink = null
let underfind 
let name 
let nun
let persone 
let sim = 'l'
let h1 = document.getElementsByTagName("h1")
console.log("h1")


let baground =document.querySelector("body")

console.log(baground.style.backgroundImage);
let check = document.getElementById("lightmode")
let block = document.querySelector('.block');

let laved = false;

let lightmode = true

check.onclick = function() {

    console.log(check.checked);
   if (check.checked == false) (
        baground.style.backgroundImage = 'url(./assets/images/wave whith.avif)' 
   )
   else (
        baground.style.backgroundImage = 'url(./assets/images/wave.png)'
   )
   }
let massCards = [
{
    Name:'fdsfsdf',
    opisanie:'text',
    Ccyilka:'30.01.2024',
    isPublick:false,
},
{
    Name:'345',
    opisanie:'fshfsjdf',
    Ccyilka:'31.01.2024',
    isPublick:false,
},
{
     Name:'123',
     opisanie:'654',
     Ccyilka:'31.01.2024',
     isPublick:false,
 },
 {
     Name:'fjtef',
     opisanie:'krlddf',
     Ccyilka:'31.01.2024',
     isPublick:false,
 },

];
let a = "Babuin"
let cardlist = document.querySelector(".cardlist");
cardlist.insertAdjacentHTML("beforeend",`<h1>Карточка<h1>`)
for (let i = 0; i<massCards.length; i++) {
     cardlist.insertAdjacentHTML(
          "beforeend",`      
</div>
<img src="./assets/images/iconk/E1.png" alt="">
<h2>${massCards[i].Name}</h2>
<p>${massCards[i].opisanie}</p>
<p>${massCards[i].Ccyilka}</p>
 </div>
 `)
}