function highlight() {
    let p = document.getElementById("para").innerText
    let arr = p.split(" ")
    let color = "", text = ""
    for (let i = 0; i < arr.length; i++) {
        console.log(typeof (arr[i].length))
       if (arr[i].length >= 8) {
            color = "<span class='colorText'>" + arr[i] + "</span>"
       }
        else {
            color = arr[i]
        }
        text = text + color + " "
    }
    return text
}
document.getElementById("para").innerHTML = highlight()