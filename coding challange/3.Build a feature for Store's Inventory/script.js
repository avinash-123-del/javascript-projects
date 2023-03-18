let dollar = {
    "clothes": 5,
    "pen": 2,
    "copy": 3,
    "bag": 6
}
function convert(dollar) {
    let key = Object.keys(dollar)
    let values = Object.values(dollar)
    let rupee = []
    values.map(e => {
        rupee.push(e * 80)
    })
    for (i = 0; i < rupee.length; i++) {
        console.log(`"${key[i]}":${rupee[i]}`)
    }
}
convert(dollar)