let marks = {
    "avinash":59,
    "heena":78,
    "preeti":67,
    "shubham":92,
    "harsh":99
}
let arr = Object.values(marks)

// let highMarks= Math.max(parseInt(arr))


//using ternary operator
arr[0]>arr[1] && arr[0]>arr[2] &&arr[0]>arr[3] && arr[0]>arr[4]? console.log(arr[0]):
arr[1]>arr[0] && arr[1]>arr[2] &&arr[1]>arr[3] && arr[1]>arr[4]? console.log(arr[1]):
arr[2]>arr[0] && arr[2]>arr[1] &&arr[2]>arr[3] && arr[2]>arr[4]? console.log(arr[2]):
arr[3]>arr[0] && arr[3]>arr[2] &&arr[3]>arr[1] && arr[3]>arr[4]? console.log(arr[3]):console.log(arr[4])










