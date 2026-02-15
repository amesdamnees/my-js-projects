// const GLOBAL_VERIBAL - когда переменная используеться для всего проэкта пишем капсом
console.log("Hello World!")
// var - умеет всплывать (или hosting или подьем) при всплытии var инцилизируеться со значением undefined
console.log(myTest) // там будет undefined
var myTest = "Hello"
// console.log (myTest) - как глобальная область видимости влияет на window 
var alert = "test"
console.log(window)
// alert("111")

// перепресвоение var
// var myTest2 = "text"
console.log(myTest2)
if (true){
    var myTest2 = "text123"
    console.log(myTest2)
}
//var - ограничен функциональной области видимости
console.log(myTest2) // - выводит ошибку изза функциональной видимости
function test2 (){  
    var myTest2 = "function tests"
    return myTest2
}
console.log(test2()) 
// myTest2 = "change text"
console.log(myTest2)

// const - нельзя переопределять он тоже всплывает и у него ограничения по блочной области видимости
const myConstTest = "text"
if (true){
    // console.log(myConstTest) - ошибка потому что myConstTest всплывет в блоке
    const myConstTest = "text123"
    console.log(myConstTest)
}
function constTest (){
    const myConstTest = "function tests"
    return myConstTest
}
console.log(constTest()) 
// myTest2 = "change text"
console.log(myConstTest)




x = 5;
console.log(x); // выведет 5
function myFunctionX() {
	x = 10;
	console.log(x, y);
}
function myFunctionY() {
	var y = 10;
	console.log(x, y);
}
myFunctionX(); // выведет что переменной x-10 а y-undefined
{
	x = 20;
	var y = 30;	
}
console.log(x, y); // выведет что переменной x-20 а y-30
myFunctionX(); // выведет что переменной x-10 а y-30
var x = 30;
y = 5
console.log(x, y); // выведет ошибку что переменная x-30 а y-5
myFunctionX();
console.log(x) // x-10 y-5
myFunctionY();// x-10 y-10
console.log(x, y);// x-10 y-5



const myName = "Anton"
let myAge = 16
const myHome= "Ukraine"
let myCurrentAdress = "Spain"
const secondsInMinute = 60
const minuteInHour = 60
const hoursInDay = 24
const daysInYear = 365
let myAgeInSeconds = secondsInMinute * minuteInHour * hoursInDay * daysInYear * myAge
console.log(myAgeInSeconds)

// const fruit = "apple";
// fruit = "banana";
// console.log( fruit );


let postCode = 3456;
postCode = 1367;
console.log( postCode );