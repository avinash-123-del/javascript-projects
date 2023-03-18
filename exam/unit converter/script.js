let tempC = {"Delhi":39 , "kolkata":25 , "Chennai":30}
function tempF(tempC){
    let newF = []
    let arrayC = Object.values(tempC)
    let arrayK = Object.keys(tempC)
    for(i in arrayC){
        for(a=0; a<1; a++){
            newF.push(arrayC[i]*(9/5)+32)
        }
    }
    for(x in arrayK){
            arrayK[x]
        }
    for(b in newF){
            newF[b]
        }
    arrayK.forEach((key,index,values) => {
         console.log(`${arrayK[index]} temp in F: ${newF[index]}`)
    });
}

tempF(tempC)