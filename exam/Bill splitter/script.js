let obj = {
    "maggie":200,
    "chicken fry":300,
    "pulao":250
}
let numP = 4
function bill(obj,numP){
    total = 0
    let arr = Object.values(obj)
    arr.forEach(e=> total= e+total)
    let billP = total/numP
    let objResult = {"Total amount":total, "Amount paid by each person: ":billP}
    return objResult
}
console.log(bill(obj,numP))