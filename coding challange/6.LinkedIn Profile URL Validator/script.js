let reg = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm

let linkedinURL = "https://www.linkedin.com/in/avinash-chandraker-99a667149/"

let result = reg.test(linkedinURL)
if(result==true){
    console.log("Valid LinkedIn profile URL")
}
else{
    console.log("LinkedIn profile URL is not valid")
}
