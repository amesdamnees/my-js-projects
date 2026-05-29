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
    [fruit]: numberOfFruit
}
console.log(myBag)
// delete myBag[fruit]
console.log(myBag)
let newBag = {}
for (let key in myBag) {
    if (key === fruit) {
        continue
    }
    newBag[key] = myBag[key]

}
myBag = { ...newBag }
console.log(myBag)
let myBagEntries = Object.entries(myBag)
myBagEntries.forEach((item) => {
    console.log(item)
})
console.log(Object.keys(myBag))
console.log(Object.values(myBag))
console.log(myBag[fruit] && myBag[fruit].type, myBag.apple?.type)

let myCar = {
    name: "Toyota",
    type: "Sedan",
    productionYear: "2021",
    colour: "Black",
    adress: {
        country: "Japan",
        city: "Tokyo"
    },
    a: [
        [
            "b",
            "c",
            {
                j: [
                    0
                ]
            }
        ]
    ]

}
const myCarEntries = Object.entries(myCar)
console.log(myCar["adress"]?.["street"])
for (let i = 0; i < myCarEntries.length; i++) {
    console.log(myCarEntries[i][0], ":", myCarEntries[i][1])
}
// console.log(myCarEntries)
console.log(myCar.a[0][2].j[0])

function conditionOfCar(car) {
    if (!car) {
        return "Вы ввели неверное авто"
    }
    const year = new Date().getFullYear()
    let condition = "Это новое авто"
    if (year - +car.productionYear >= 3) {
        condition = "Это Б/У авто"
    }

    return condition
}
console.log(conditionOfCar(myCar))
