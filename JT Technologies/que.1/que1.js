let arr = [-4,1,3,-2,-1]
function ZeroSum(arr) {
    let n = arr.length;
    if (n < 2) {
      return "No Elements found";
    }
    let add = {};
    for (let i = 0; i < n; i++) {
      for (let x = i + 1; x < n; x++) {
        let sum = arr[i] + arr[x];
        if (sum === 0) {
          return [arr[i], arr[x]];
        } else {
          add[sum] = [arr[i], arr[x]];
        }
      }
    }
    for (let key in add) {
      if (add.hasOwnProperty(-key)) {
        return add[-key].concat(add[key]);
      }
    }
    return "No Elements found";
  }

  let result = ZeroSum(arr);
  console.log(result);
  //possible outputs--
  //[ 1, -1 ]
  //[3,-2,-1]