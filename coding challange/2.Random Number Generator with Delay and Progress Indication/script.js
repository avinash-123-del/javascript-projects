var delay = 3000
let count = (delay / 1000)
setInterval(() => {
    let raNum = Math.random()
    console.log(raNum)

}, delay+100);
let i = 0
setInterval(() => {
    if (i == count) {
        i = 0
    }
    console.log(++i)
}, 1000);
// count = (delay / 1000)





// for (let i = 0; i <= count; i++) {
// let timer = setInterval(() => {
//     count = (delay / 1000)
//         count = count - 1
//         if (count === -1) {
//             return timer
//         }
//     }
//     , 1000);
//     console.log("time remianing:", i)
// }