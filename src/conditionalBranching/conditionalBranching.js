// let role = "Admin"
// if (role === "Admin") {
//     console.log("Приветствую Admin")
// } else if (role === "User") {
//     console.log("Привет, User")
// } else {
//     console.log("Привет, не Admin")
// }
// let errorCode = role === "Admin" ? 1 : role === "User" ? 2 : 0
// console.log(errorCode)

// let questionForUser = prompt("Какое животное вам нравиться?", "Кот,Собака,Попугай,Змея,Хомяк")
// const defSMS = `Отлично! ${questionForUser} очень красивое животное`
// if (questionForUser === "Кот") {
//     alert("Отличный выбор, кошки очень спокойные домашние животные!")
// } else if (questionForUser === "Собака") {
//     alert("Отлично!Собаки очень активные и добрые животные!")
// } else if (questionForUser !== "Попугай" && questionForUser !== "Змея" && questionForUser !== "Хомяк") {
//     alert("Извините, не знаю такого животного")
// }
// else {
//     alert(defSMS)
// }

// Виведи модальне вікно, яке запитує у користувача параметр х
// функції. Далі напиши код, який обчислює значення функції y в
// залежно від параметра x:
// y = x, якщо x <10;
// y = x2
// якщо 10 <= x < 20;
// y = x3
// якщо 20 <= x < 30;
// y = 0 у всіх інших випадках.
const x = prompt("Введите параметр X")
let y
if (x < 10) {
    y = x
}
else if  (10<= x && x < 20){
    y=x*2
}
else if (20 <= x && x < 30){
    y=x*3
}
else {
    y=0
}
alert(y)