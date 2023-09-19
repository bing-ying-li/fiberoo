function fib() {
  const fibArray = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}
console.log(fib());
function numsToStrings(num) {
  return num.map(number => String(number));
}
console.log(numsToStrings(fib()));
function numEvenNums(num) {
  return num.filter(number => number % 2 === 0).length;
}
console.log(numEvenNums(fib()));
