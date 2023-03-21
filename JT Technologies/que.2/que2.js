
let carHashback = {
    cartype: "Hashback",
    serviceHash: {
        BS01: ["Basic Servicing", 2000],
        EF01: ["Engine Fixing", 5000],
        CF01: ["Clutch Fixing", 2000],
        BF01: ["Break Fixing", 1000],
        GF01: ["Gear Fixing", 3000]
    }
}
let carSaden = {
    cartype: "Saden",
    serviceSaden: {
        BS01: ["Basic Servicing", 4000],
        EF01: ["Engine Fixing", 8000],
        CF01: ["Clutch Fixing", 4000],
        BF01: ["Break Fixing", 1500],
        GF01: ["Gear Fixing", 6000]
    }
}
let carSUV = {
    cartype: "SUV",
    serviceSUV: {
        BS01: ["Basic Servicing", 5000],
        EF01: ["Engine Fixing", 10000],
        CF01: ["Clutch Fixing", 6000],
        BF01: ["Break Fixing", 2500],
        GF01: ["Gear Fixing", 8000]
    }
}
let bill = 0

function fun(carName, ser) {
    if (carName == "Hashback") {
        ser = Array.from(arguments).slice(1)
        console.log("CarType is: ", carName)
        let arr = []
        for (i in ser) {
            let add = carHashback.serviceHash[ser[i]][1]
            bill = bill + add
            arr.push(carHashback.serviceHash[ser[i]][0])
        }
        console.log("" + [...arr]);
        console.log("Total bill is:", bill)
    }
    if (carName == "Saden") {
        ser = Array.from(arguments).slice(1)
        console.log("CarType is: ", carName)
        let arr = []
        for (i in ser) {
            let add = carSaden.serviceSaden[ser[i]][1]
            bill = bill + add
            arr.push(carSaden.serviceSaden[ser[i]][0])
        }
        console.log("" + [...arr]);
        console.log("Total bill is:", bill)
    }
    if (carName == "SUV") {
        ser = Array.from(arguments).slice(1)
        console.log("CarType is: ", carName)
        let arr = []
        for (i in ser) {
            let add = carSUV.serviceSUV[ser[i]][1]
            bill = bill + add
            arr.push(carSUV.serviceSUV[ser[i]][0])
        }
        console.log("services:" + [...arr]);
        console.log("Total bill is:", bill)
    }
}
fun("SUV", "BS01", "BF01")