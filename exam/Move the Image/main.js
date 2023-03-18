
let count = 1, up=1
document.onkeydown = function(event){
    let img = document.getElementById("image")
    if(event.key=="ArrowDown"){
        count =count+5  
        img.style.marginTop = `${count}px`
        console.log(count)
        }
    if(event.key=="ArrowUp"){
            count =count-5  
            img.style.marginTop = `${count}px`
            console.log(count)

        }   
    if(event.key=="ArrowLeft"){
            count =count-5
            img.style.marginLeft = `${count}px`
            console.log(count)

        }   
    if(event.key=="ArrowRight"){
            count =count+5  
            img.style.marginLeft = `${count}px`
            console.log(count)

        }   
}
