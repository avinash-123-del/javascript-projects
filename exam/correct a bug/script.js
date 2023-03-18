
let items = {"clothes":12,"mobile":8,"pendrive":4}
let quantities = Object.values(items)
let halfQuantity = []
let fullQuantity = []

//bug in program
for(i in quantities){
    halfQuantity.push(parseInt(quantities[i])/2)
}

//correction
for(a in halfQuantity){
    fullQuantity.push(halfQuantity[a]*2)

}
console.log(fullQuantity)
