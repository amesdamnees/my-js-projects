console.log(typeof (null))
const user = {
    name: `John`,
    age: 22,
    "active status": true
}
let user1 = new Object({
    name: `Unknown`,
    age: 33
})
const variable = "name"
console.log(user.name, user["active status"], user[variable])
user.name = "Anton"
user["active status"] = false
console.log(user.name, user["active status"], user[variable])
// let bag = {}

// const addToBag = () => {
//     let question = prompt("Что бы вы хотели купить?")
//     let questionNumber = prompt("Сколько бы хотели?")
//     bag[question] = +questionNumber
//     return {
//         [question]:+questionNumber
//     }
// }
// console.log(addToBag())
// console.log(bag)
let fruit = "Apple"
let numberOfFruit = 6
let myBag = {
    orange: 6,
    banana: 7,
    [fruit]:numberOfFruit
}
console.log(myBag)
// delete myBag[fruit]
console.log(myBag)
    let newBag = {}
for (let key in myBag){
    if(key === fruit){
        continue
    }
        newBag[key] = myBag[key]

}
myBag = {...newBag}
console.log(myBag)
let myBagEntries = Object.entries(myBag)
myBagEntries.forEach((item) => {
    console.log(item)
})
console.log(Object.keys(myBag))
console.log(Object.values(myBag))