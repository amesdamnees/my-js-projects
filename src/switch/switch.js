let x = 1
// switch (x) {
//     case 5:
//         console.log("Это число 5")
//         break;
//     case 6:
//         console.log("Это число 6")
//         break;
//     case 1:
//     case 2:
//         alert ("Это число 1 либо это 2")
//         break;
//     default:
//         console.log(`Я не знаю что это за число ${x}`)
//         break;
// }                                  

switch (true) {
    case (x > 5):
        console.log("Это число больше 5")
        break;
    case (x > 1 && x <= 3):
        console.log("Это число 2 либо 3")
        break;
    default:
        console.log(`Это число ${x}`)
        break;
}

// let day = prompt('Введите день недели', 'понедельник');
// if ( day === 'суббота' || day === 'воскресенье' ) {
// console.log( 'Сегодня выходной' );
// }
// else {
// console.log( 'Сегодня рабочий день' );
// }

// switch (day) {
//     case "суббота":
//     case "воскресенье":
//         console.log('Сегодня выходной')
//         break;

//     default:
//         console.log('Сегодня рабочий день')
//         break;
// }
// Цвет Предмет
// желтый солнце
// красный помидор
// зеленый трава
// оранжевый апельсин
// синий небо
let colour = ["желтый", "красный", "зеленый", "оранжевый", "синий", "серый"]
let objects = ["солнце", "помидор", "трава", "апельсин", "небо"]
for (let i = 0; i < colour.length; i++) {
    switch (colour[i]) {
        case "желтый":
        case "красный":
        case "зеленый":
        case "оранжевый":
        case "синий":
            console.log(objects[i])
            break;
        default:
            console.log("Я не знаю что это за предмет")
            break;
    }
}

// switch (fruit) {
// case 'apple':
// console.log(' Your favorite fruit is apple. ' );
// break;
// case 'orange':
// console.log( ' Your favorite fruit is orange. ' );
// break;
// case 'pear':
// console.log( ' Your favorite fruit is pear. ' );
// break;
// default:
// console.log( ' Favorite fruit is not defined! ' );
// }
// let fruit = prompt("Введи название фрукта")
// if (fruit === "apple") {
//     console.log("Your favorite fruit is apple.")
// } else if (fruit === "orange") {
//     console.log(' Your favorite fruit is orange. ');
// } else if (fruit === "pear") {
//     console.log(' Your favorite fruit is pear. ');
// } else {
//     console.log(' Favorite fruit is not defined! ')
// }
let shouldContinue = false
let num1 = null;
let num2 = null;
let operation = null
let result;
while (!shouldContinue) {
    while (num1 === null) {
        num1 = +prompt("ВВедіть перше число")
        if (typeof (num1) !== "number" || Number.isNaN(num1)) {
            alert("Ви ввели не число")
            num1 = null
        }
    }
    while (num2 === null) {
        num2 = +prompt("ВВедіть друге число")
        if (typeof (num2) !== "number" || Number.isNaN(num2)) {
            alert("Ви ввели не число")
            num2 = null
        }
    }
    while (operation === null) {
        operation = prompt("Яку операцію хочете провести (сума, віднімання, множення чи ділення)?")
        if (operation === "Бувай") {
            alert("Ссесія завершена")
            shouldContinue = true;
            break;
        }
        if (
            operation !== "сума" &&
            operation !== "віднімання" &&
            operation !== "множення" &&
            operation !== "ділення"
        ) {
            alert("Неправильна команда,щоб закінчити введіь 'Бувай' ")

            operation = null
        }
    }
    if (!shouldContinue) {
        break;
    }
    switch (operation) {
        case "сума":
            result = num1 + num2;
            break;
        case "віднімання":
            result = num1 - num2;
            break;
        case "множення":
            result = num1 * num2;
            break;
        case "ділення":
            result = num1 / num2;
            break;
        default: {
            alert("Виникла помилка, спробуйте ще раз")
            shouldContinue = false
            break;
        }
    }
    if (!shouldContinue) {
        continue
    }
    alert(`Ваш результат ${result}`)
    const questionConfirm = confirm("Хочете продовжити?")
    if (!questionConfirm) {
        alert("До побачення!")
        shouldContinue = false
    }
}

// пофиксить код



