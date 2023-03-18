let a = "hii hello where are you going"
let al= (a.split(" "))
let text = ""
console.log(a)
setTimeout(() => {
for(let i=(al.length-1);i>=0;i--){
   text =  text+al[i]+" "
}
console.log(text)
    
}, 2000);