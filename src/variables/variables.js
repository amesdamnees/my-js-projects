const GLOBAL_VERIBAL // когда переменная используеться для всего проэкта пишем капсом
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
