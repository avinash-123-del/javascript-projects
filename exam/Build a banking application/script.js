let user = {
    "name":"Avinash",
    "balance":4000
}
let banking,amount
let username = user.name
function obj(username,banking,amount){
        if (username=="Avinash"){
            if(banking=="deposit"){
                user.balance+=amount
            }
            else if(banking=="withdraw"){
                user.balance-=amount
            }
            else{
                user.balance
            }
        }
        else{
            console.log("Invalid username")
        }
        return (`Balance Amount:${user.balance}`)
}

console.log(obj("Avinash","deposit",5000))