function form1() {
    let cpswd = document.getElementById("cpswd").value
    let message = document.getElementById("message")
    let mail = document.getElementById("mail").value
    let pswd = document.getElementById("pswd").value
    
    if(mail.indexOf('@')<=0 && pswd.length < 8){
        message.innerText = "invalid email or password!"
        message.style.color = "red"
        return false
    }
    else{

        if(pswd==cpswd){
            message.style.color = "green"
            message.innerText = "Valid email and password!"
        }
        else if(pswd!=cpswd){
            message.style.color = "red"
            message.innerText = "Invalid email or password!"
            
        }
        return true
    }
    }

