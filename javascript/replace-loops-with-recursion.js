//Write a recursive function, sum(arr, n),
//that returns the sum of the first n elements of an array arr. 

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0
    } else {
      return sum(arr, n-1) + arr[n-1]
    }
    // Only change code above this line
  }

  // Test Cases
  /*
sum([1], 0) should equal 0.
sum([2, 3, 4], 1) should equal 2.
sum([2, 3, 4, 5], 3) should equal 9.
  */