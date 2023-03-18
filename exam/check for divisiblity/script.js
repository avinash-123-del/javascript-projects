let inputAarry = [1,12,36,6,51,9,27,21]
let arr2=[]
let arr3=[]
for(i in inputAarry){
    if(inputAarry[i]%3==0){
    arr2.push(inputAarry[i])
    }
}
for(a in arr2){
    if(arr2[a]%2==0){
        continue
    }
    arr3.push(arr2[a])
}
console.log(arr3)