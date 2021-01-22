"use strict";
/*
input: number
output: function that:

input number
output: logs to the console numbers between first and second number

*/


function makeCounterLogger(num1) {
  return function(num2) {
    if (num1 < num2) {
      for (let count = num1; count <= num2; count += 1) {
        console.log(count);
      }
    } else {
      for (let count = num1; count >= num2; count -= 1) {
        console.log(count);
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);