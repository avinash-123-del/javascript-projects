let text = document.getElementById("text")
text.addEventListener("keypress",  fun=(event)=>{
    let add = document.getElementById("add")
    let add_list = document.createElement("li")
    let add_para = document.createElement("p")
    if(event.key==="Enter"){
        add_list.classList.add("add_list")
        add_list.innerHTML = `<i class="fa-regular fa-circle-xmark" id="icon"></i>`   
        add_list.append(add_para)
        add_para.append(text.value)
        add.appendChild(add_list)
        text.value=""
        
    }
    let i = add_list.querySelector("i")
    i.addEventListener("click", ()=>{
        add.removeChild(add_list)
        console.log("haa")
    })
})

