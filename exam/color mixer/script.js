let color1="red",color2="kk"

if(color1=="red" && color2=="blue" || color1=="blue" && color2=="red"){
    mixer=1
}

else if (color1=="red" && color2=="yellow" || color1=="yellow" && color2=="red"){
    mixer=2
}
else if (color1=="blue" && color2=="yellow" || color1=="yellow" && color2=="blue"){
    mixer=3
}
else{
    mixer=4
}


switch (mixer) { 
    
    case 1:
        console.log("purple")
        break;
    case 2:
        console.log("orange")
        break;
    case 3:
        console.log("green")
        break;
    case 4:
        console.log("Invalid color combination")
        break;

    default:
        break;
}