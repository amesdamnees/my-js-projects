// "use strict"
let user = {
    age: 40,
    name: "John",
    hi: function () {
        console.log("Привет", this)
        this.howAreYou()
    },
    bye () {
        console.log("Пока")
    },
    howAreYou : () => {
        console.log("Как дела?", this)
        return this.age
    },
    getAge () {
        return this.age
    }
}
user.hi()
// user.bye()
console.log(user.howAreYou())
function imFine () {
    console.log("Все отлично")
    return 0
}
user.imBad = imFine
// console.log(user.imBad())
user.imBad()
console.log(user.getAge())

function myFunction () {
    this.age = 45
    console.log (user.howAreYou(), this)
}
myFunction()
// this это ссылка на обьект, это ключевое слово оно может использоваться в любой функции
// значение this вычесляеться во время выполнения кода и зависит от контекста
// просто вызов this в методе ссылаеться на обьект методом котороя являеться функция 
// а в use strict моде this будет являться undefined кроме тех случаев когда функция являеться
// методом обьекта
