/*
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));
  The value [1, 2, 3, 4, 5] will be displayed in the console.
  
  


  */


  function countdown(n){
    if (n < 1) {
      return []
    } else {
      const countArray = countArray(n - 1) 
      countArray.unshift(n)
      console.log(countArray)
      return countArray
    }
  }