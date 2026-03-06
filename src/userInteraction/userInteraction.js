// const myAlert = alert("Hello World!")
// console.log(myAlert)
let age = prompt("Сколько вам лет?")
// const  = confirm(`Вам ${age} лет?`)
const prohibitionMessage = ()=>alert("Вам запрещено заходить на этот сайт")
const adultAge = (checkingAge)=> checkingAge < 18
console.log(age)
if (adultAge(age)) {
    const isConfirmed = confirm(`Вам точно ${age}?`)
    if (isConfirmed) {
        prohibitionMessage()
    }
    else {
        age = prompt("Введите корректный возраст", age)
        console.log(age) // тут ошибка
        if (adultAge(age)) {
            prohibitionMessage()
        }
    }

}
// доделать код, (ошибка в age)
