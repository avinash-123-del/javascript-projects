let i=6
let str = ""
for(a=0; a<=i; a++){        
    for(x=0; x<i-a; x++){      
        str = str+"*"
    }
    str+="\n"
}
console.log(str)