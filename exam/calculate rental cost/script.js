//car rental system

function car(days,carType) {
    if(carType=="Economy"){
        cost = days*4000
    }
    else if(carType=="Midsize"){
        cost = days*10000
    }
    else if(carType=="Luxury"){
        cost = days*20000
    }
    return cost
}
console.log("your total cost is :", car(4,"Economy"))
