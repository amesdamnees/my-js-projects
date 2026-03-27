// && - логический оператор "и", || - логический оператор "или",
// ! логический оператор "нет", ?? - оператор нулевого слияния (при сравнение возвращает первое значение которое определили(не null и не undefined))
console.log(1 || true || "hi" || 2)
let x 
true || (x=1)
console.log(x)
console.log ( 2 && 5 && "hi");
(x>0) && console.log("hi");
console.log(!true) 
console.log(!!null)
console.log(x ?? "hi")
const timeNow = prompt("Какое сейчас время","от 0 до 23")
if(timeNow <= 5 || timeNow === 23){
    alert("Спокойной ночи")
} else if(timeNow <= 11){
    alert("Доброе утро")
} else if (timeNow <= 16){
    alert ("Добрый день")
} else {
    alert("Добрый вечер")
}