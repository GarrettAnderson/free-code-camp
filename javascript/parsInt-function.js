/* 
The parseInt() function parses a string and returns an integer. 
It takes a second argument for the radix, which specifies the base of the number
in the string. The radix can be an integer between 2 and 36.
*/

function convertToInteger(str) {
    return parseInt(str, 2)
  }
  
  convertToInteger("10011");

  /* 
  The radix variable set to 2 indicats the str is in the binary system
  So str is parsed and the binary number is converted to an integer
  If the string cannot be converted, NAN is returned

TEST CASES
  convertToInteger("JamesBond") should return NaN
  convertToInteger("10011") should return 19
  */