module.exports = {
  generateRandomNumber: (num1, num2) => {
    if(arguments.length === 0) {
      return Math.floor(Math.random() * 100) + 1;
    }
    if(arguments.length === 1) {
      let n = 0;
      if(num1 > 0) {n = 1}
      return Math.floor(Math.random() * num1) + n;
    }
    if(n1 > n2) {
      const n1 = num2;
      const n2 = num1;
    } else {
      const n1 = num1;
      const n2 = num2;
    }
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
  },
  randomizeArray: arr => {
    let i = arr.length;
    let current;
    let random;
    while(i !== 0) {
      random = Math.floor(Math.random() * i);
      i--;
      current = arr[i];
      arr[i] = arr[random];
      arr[random] = current;
    }
    return arr;
  }
}