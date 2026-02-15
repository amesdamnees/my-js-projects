const myString = "string"
const myNumber = 123
const myBigInt = 123n
const isBoolean = true 
const myBigInt1 = BigInt("12333")
const myUndefined = undefined
const myNull = null 
const mySymbol = Symbol(123)
const myObject = {
    a: 10,
   [mySymbol]:"SycretVariable"
}
console.log(Object.keys(myObject))