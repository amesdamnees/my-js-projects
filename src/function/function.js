// главная разница между function decloration и function expression это hoisting
hello()
function hello() {
    console.log("Привет!")
}
// это function decloration
const sayHello = function () {
    console.log("Привет!")
}
// это function expression
const user = {
    age: 22,
    name: "Ivan",
    lastName: "Petrov"
}
const user1 = {
    age: 34,
    name: "Andrey",
    lastName: "Popov"
}
function getUserAge(ourUser = user) {
    console.log(ourUser.age)
}
getUserAge()
getUserAge(user1)

function showUserName(name, lastName) {
    console.log(`Имя:${name} Фамилия:${lastName}`)
}
showUserName(user.lastName, user.name)
function ourConsoleLog(...args) {
    console.log(...args)

}
ourConsoleLog("Hello", "My Name is", "Anton")

function sum(...numbers) {
    let ourSum = 0

    if (Array.isArray(numbers)) {
        return ourSum
    }
    if (numbers.length === 1) {
        return numbers[0]
    }
    for (let i = 0; i < numbers.length; i++) {
        ourSum += numbers[i]
    }
    return ourSum
}
console.log(sum(5, 5, 5))

function showFullUserName(showUserFunc, func) {
    func()
    showUserFunc()
}
showFullUserName(() => showUserName(user.name, user.lastName), sayHello)


function checkNumbers() {
    const checkNull = function (variable) {
        if (variable === null) {
            return;
        }
        return +variable
    }
    let firstNumber = checkNull(prompt("Введіть перше число"));
    if(firstNumber === undefined){
        return;
    }
    let secondNumber = checkNull(prompt(`Введіть число більше чим ${firstNumber}`));
    while (secondNumber < firstNumber) {
        secondNumber = checkNull(prompt(`Помилка, спробуйте ще раз`));
    }
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 2 === 0) {
            console.log(`${i} це число ділиться на 2 без остачі`);
        }
        if (i % 3 === 0) {
            console.log(`${i} це число ділиться на 3 без остачі`);
        }
    }
}
checkNumbers();

