let cart = [
    {200:4},{250:2},{300:1},{50:1}
]
const arrFunction  = (cart) =>{
    let result,total=0,arr1 = []
    cart.forEach((element, index, arr) => {
        let objKey = Object.keys(cart[index])
        let objValue = Object.values(cart[index])
        result = objKey * objValue
        arr1.push(result)
    });
    
    for(i in arr1){
        total = total+arr1[i]
    }
    console.log("total cost of items are:",total)
}
arrFunction(cart)