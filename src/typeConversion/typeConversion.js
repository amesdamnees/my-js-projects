// не явные переобразование типов
console.log("5" + 2)
console.log("Hello " * "World")
console.log(true)

// явные переобразование
let testStringNumber = "5"
let testString = "Hello"
let testBoolean = true
let testEmptyString = ""
let testUndefined = undefined
let testNull = null
console.log(
    `Переобразование числа в строке в число ${Number(testStringNumber)}\n`, // 5
    `Переобразование строки в число ${Number(testString)}\n`, // NaN
    `Переобразование булиана в число ${Number(testBoolean)}\n`, // true = 1 если false = 0
    `Переобразование пустой строки в число ${Number(testEmptyString)}\n`, //  0
    `Переобразование undefined в число ${Number(testUndefined)}\n`, // NaN
    `Переобразование null в число ${Number(testNull)}\n`, // 0
)
let testNumber = "5 105.5 test"
console.log(parseInt(testNumber))
console.log(parseFloat(testNumber))

console.log(String(testNumber))
console.log((testBoolean.toString()))
console.log(Boolean(testString)) 
// false 0 та -0, "" (порожній рядок), null, undefined, NaN, будут равны false
const testObject = {
    a:5
}
const testArray = []
console.log(Boolean(testArray))

console.log (0 == false)
console.log(" \n" == 0)
console.log(NaN === NaN)


// Д/з
let test = 1 / 0;
test = String( test ); // "0"
console.log(test)
test = Boolean ( test ); // true
console.log( test); // 0 
console.log( true - 1 ); // 0
console.log( 9 + false ); // 9
console.log( null * 2 ); // 0