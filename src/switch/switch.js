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
const ourNumber = 4;
let isUserRight = false
while (!isUserRight) {
    const questionNumber = +prompt("Введите число", "от 1 до 10")
    switch (questionNumber) {
        case ourNumber:
            alert("Вы угадали!");
            isUserRight = true;
            break;
        case 3:
        case 5:
            alert("Очень горячо!")
            break;
        case 2:
        case 6:
            alert("Тепло")
            break;
        default:
            if (questionNumber > 10) {
                alert("Введите число от 1 до 10")
            } else {
                alert("Холодно")
            }
            break;
    }
}
