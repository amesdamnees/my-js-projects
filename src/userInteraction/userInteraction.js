// const myAlert = alert("Hello World!")
// console.log(myAlert)
let age = prompt("Сколько вам лет?")
// const  = confirm(`Вам ${age} лет?`)
const prohibitionMessage = ()=>alert("Вам запрещено заходить на этот сайт")
const adultAge = ()=> age < 18
if (adultAge) {
    const isConfirmed = confirm(`Вам точно ${age}?`)
    if (isConfirmed) {
        prohibitionMessage()
    }
    else {
        age = prompt("Введите корректный возраст", age) // тут ошибка
        if (adultAge) {
            prohibitionMessage()
        }
    }

}
// доделать код, (ошибка в age)