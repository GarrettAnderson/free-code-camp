/*
It is considered best practice to format multiple conditional 
operators such that each condition is on a separate line:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}






In the checkSign function, use multiple conditional operators - 
following the recommended format used in findGreaterOrEqual - 
to check if a number is positive, negative or zero. 
The function should return positive, negative or zero.
*/

function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"
  }
  
  checkSign(10);