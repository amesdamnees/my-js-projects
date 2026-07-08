"use strict"
let user = {
    age: 40,
    name: "John",
    hi: function () {
        console.log("Привет", this)
        this.howAreYou()
    },
    bye() {
        console.log("Пока")
    },
    howAreYou: () => {
        console.log("Как дела?", this)
        return this.age
    },
    getAge() {
        return this.age
    }
}
user.hi()
// user.bye()
console.log(user.howAreYou())
function imFine() {
    console.log("Все отлично")
    return 0
}
user.imBad = imFine
// console.log(user.imBad())
user.imBad()
console.log(user.getAge())

// function myFunction() {
//     this.age = 45
//     console.log(user.howAreYou(), this)
// }
// myFunction()
// this это ссылка на обьект, это ключевое слово оно может использоваться в любой функции
// значение this вычесляеться во время выполнения кода и зависит от контекста
// просто вызов this в методе ссылаеться на обьект методом котороя являеться функция 
// а в use strict моде this будет являться undefined кроме тех случаев когда функция являеться
// методом обьекта


// / Создай об'єкт car. В нього поля color, country, age, amount.
// Треба щоб у еього були методи які виводять усі його свойства і також метод який може
// змінювати колір./ Щоб коли ми викличемо метод getColor() був вже змінений.

const car = {
    color: "red",
    country: "Germany",
    age: 5,
    amount: 20000,

    showInfo() {
        console.log(this.color);
        console.log(this.country);
        console.log(this.age);
        console.log(this.amount);
    },

    changeColor(newColor) {
        this.color = newColor;
    }
};

car.showInfo();
car.changeColor("blue");
car.showInfo(); 

let result = () => this;
console.log( result() );

function result2 (){
    // this.alert = "Hi"

    let ataxi = () => this;
    return ataxi()
}
console.log(result2())
// alert("Hi")

