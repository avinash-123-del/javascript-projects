
let newProduct = ["heater","mobile","pendrive","mobile","pendrive"]
function products(newProduct){
    // console.log(newProduct)
    return newProduct.filter((item,index)=>
        newProduct.indexOf(item)===index
    )
    
}
console.log(products(newProduct))