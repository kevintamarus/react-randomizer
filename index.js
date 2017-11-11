module.exports = {
  randomNumber: (num1, num2) => {
    let n1 = num1;
    let n2 = num2;
    if(num1 > num2) {
      n1 = num2;
      n2 = num1;
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