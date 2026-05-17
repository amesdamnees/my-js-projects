// arrow function может возвращать результат своего вызвова без ключевого слова return
// добавляеться "=>" при вызове в отличии от простых функций
const arrowFunction = (a, b) => a + b
console.log(arrowFunction(2, 3))

// у arrow function нету свойства arguments в отличии от функций 
const functionExpression = function () {
    console.log(arguments, arguments[0])
}
const arrowArguments = (...args) => {
    console.log(args, args[0])
}
functionExpression(2, 5, 6)
functionExpression(9)
arrowArguments("a", "b", "c")

/* Разница между arrow function и обычной function в this, у arrow function
 нету своего this она наследует this из внешнего контекста для его создания
 */
const obj = {
    getName: () => {
        return this.name
    },
    name: "Anton",
    getName2: function () {
        return this.name
    }

}
console.log(obj.getName())
console.log(obj.getName2())

/* Ключевая разница что arrow function неможет быть вызвана через new потому что она
не имеет метод construct и свойств prototype */
const newFunctionExpression = new functionExpression()
console.log(newFunctionExpression)