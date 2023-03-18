let urlcheck = "http://foo.co.uk/"
let reg = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm

const result = reg.test(urlcheck)
if(result==true){
    console.log("The input matches the valid URL")
}
else{
    console.log("The input is not a valid URL")

}