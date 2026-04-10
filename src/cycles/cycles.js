let i = 0
while (i <= 10) {
    i++
    console.log(i)
}

do{
    i++
    console.log(i)
} while (i>=10 && i<20)

for(; i >= 20 && i <= 30;i++){
    if(i%2 === 0){
        continue
    }
    console.log(i)

}
g:for ( let i = 0; i<3 ; i++ ){

    for(let a = 0; a<3 ; a++){
       let question = prompt(`${i} ${a}`)
       if(!question){
        break g;
       }
    }
}