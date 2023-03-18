const arrfunction =(original,discountPrice)=>{
    netPrice = original - discountPrice 
    discountPercentage = (netPrice/original)*100
    return (Math.ceil(discountPercentage))               
}
console.log(arrfunction(150,50))
