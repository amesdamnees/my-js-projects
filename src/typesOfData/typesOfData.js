// literals или приметивы 
const myString = "string"
const myNumber = 123 // (это 2 в степени 53)-1
const myBigInt = 123n
const isBoolean = true
const myBigInt1 = BigInt("12333")
const myUndefined = undefined // деффолтное значение
const myNull = null // null присваевают вручную
const mySymbol = Symbol(123)
// это структурный тип данных (отличие от литераллов что на обьектах сохраняеться ссылка)
// так же обьектом считаеться массив array, map - карта,set и функция это тоже обьект
const myObject = {
    a: 10,
    [mySymbol]: "SycretVariable"
}
console.log(Object.keys(myObject), myObject[mySymbol], myObject.a)


const price = myString / myNumber
console.log(price)
console.log(`price=${myNumber}`)
console.log("price=" + myNumber)
const testBoolean = myNumber !== 10
console.log(testBoolean)
// let age;
// console.log(age)
console.log(typeof (console.log))


let age;
console.log(typeof 45n);
console.log(typeof "1234");
console.log(typeof (1 < 0));
console.log(age);

console.log(typeof 35.0);
console.log(35 / 0);
console.log(typeof (35 / 0));
console.log(typeof null);
console.log(typeof "${}");
console.log(typeof (myNumber) === "number")
