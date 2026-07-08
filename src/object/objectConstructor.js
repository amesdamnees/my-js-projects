"use strict"
function User(name, isAdmin) {
    if (!new.target) {
        return {
            name: "Bodya",
            isAdmin: "Boss"
        }
    }
    this.name = name
    this.isAdmin = isAdmin

    this.showStatus = function () {
        let text = `Юзера зовут ${this.name} и он${this.isAdmin ? "" : " не"} админ:${this.isAdmin}`
        console.log(text)
    }

}

let user1 = new User("John", false)
let user2 = new User("Petya", true)
let user3 = User("Kirill", true)
console.log(user1, user2, user3)
console.log(new Date(), Date.now())
user1.showStatus()
user1.isAdmin = true
user1.showStatus()

console.log(user1)
function Pet(name, type, age, owner) {
    this.name = name
    this.type = type
    this.age = age
    this.owner = owner
    this.getInfo = function () {
        console.log(this.name)
        console.log(this.type)
        console.log(this.age)
    }
    this.sayHello = function () {
        let sound;
        switch (this.type) {
            case "dog":
                sound = "гав!"
                break;
            case "cat":
                sound = "мяу!"
                break;
            case "bird":
                sound = "чирик!"
                break;

            default:
                sound = "Привет!"
                break;

        }
        console.log(sound)
    }
    this.getOwner = function () {
        console.log(this.owner)

    }
}
let dog = new Pet("rex","dog",5,"Ivan")
let cat = new Pet("persik","cat",3)
let bird = new Pet("kesha","bird",1,"Vova")
let snake = new Pet ("katya","snake",3,"Nastya")
console.log("dog",dog)
dog.getInfo()
dog.sayHello()
dog.getOwner()
console.log("cat")
cat.getInfo()
cat.sayHello()
cat.getOwner()
console.log("bird")
bird.getInfo()
bird.sayHello()
bird.getOwner()
console.log("snake")
snake.getInfo()
snake.sayHello()
snake.getOwner()