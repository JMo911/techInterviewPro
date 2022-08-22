// 2d array, matrix grid input
// start w/ nothing..

class Solution {
  fibonacci(num) {
    if (num === 0) {
      return 0;
    }
    if (num === 1) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
}

const mySolution = new Solution();
console.log(mySolution.fibonacci(8));
