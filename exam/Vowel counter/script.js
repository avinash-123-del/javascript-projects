function user(str) {
    let name1 = Array.from(str)
    let arg = name1.length
    let count=0
    for(let i=0; i<=arg; i++){
        if(name1[i]=="a" || name1[i]=="e" ||name1[i]=="i" ||name1[i]=="o" ||name1[i]=="u" ){
            count+=1
        }
    }
    console.log("Number of vowel is :",count)
      
}
user("animal")


