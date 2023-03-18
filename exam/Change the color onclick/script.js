let btn = document.getElementById("button")
btn.addEventListener("click", ()=>{
    let arr = ["#008000", "#800080", "#FF0000", '#FFFFFF',"#FA8072","#FFBF00","#6495ED","#DE3163","#9FE2BF","#CCCCFF"]
    let color =  Math.floor((Math.random()*10))
    document.body.style.background = arr[color]
    console.log(arr[color])
})