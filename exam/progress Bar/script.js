
let color =  document.getElementById("color")
document.addEventListener("scroll", (event)=>{
    // console.log(event)
    if(event["type"]="scroll"){
        color.classList.add("coloradd")
        color.textContent = "100%"
    }
})


