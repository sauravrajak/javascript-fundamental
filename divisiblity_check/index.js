function printNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
      console.log(arr[i]);
      continue;
    }
  }
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
printNumbers(arr)