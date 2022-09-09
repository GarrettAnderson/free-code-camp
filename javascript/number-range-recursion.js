
/*
The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
    console.log(`returning [${endNum}]`)
    return [startNum];
    } else {
      console.log(`calling recursive function rangeOfNumbers(${startNum}, ${endNum - 1})`)
      const arr = rangeOfNumbers(startNum, endNum - 1) 
      arr.push(endNum)
      console.log(`pushed ${endNum} into array: ${arr}`)
      return arr
    }
  };


  rangeOfNumbers(1, 3) 