var delay = 3000
let count = (delay / 1000)
setInterval(() => {
    let raNum = Math.random()
    console.log(raNum)

}, delay);
let i = 0
let timer = setInterval(() => {
    count = (delay / 1000)
        count = count - 1
        if (count === -1) {
            return timer
        }
        console.log("time remianing:", count-i)
        console.log(i)
    }, 1000);

