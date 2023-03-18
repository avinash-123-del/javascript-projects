let num1 = 3
let num2 = 6
let operator = "/"


switch (operator) {
    case "+" : console.log(num1+num2)
        break;
    case "-" : console.log(num1-num2)
        break;
    case "*" : console.log(num1*num2)
        break;
    case "/" : console.log(num1/num2)
        break;

    default:
        console.log("Invalid Input")
        break;
}