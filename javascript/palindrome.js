function palindrome(str) {
    
  const newStr = str.replace(/[^A-Z0-9]/ig, "").toLowerCase()
  const splitStr = newStr.split("")
  const reversedStrArr = [...splitStr].reverse()
  const reversedStr = reversedStrArr.join("")

  if (newStr === reversedStr) {
    return true
  } else {
    return false
  }
  
  // const splitStr = str.split("")
    // const reversedStr = [...splitStr].reverse()
  
    // for (var i = 0; i < splitStr.length; i++) {
    //   for (var j = 0; j < reversedStr.length; j++) {
    //     if (splitStr[i] === reversedStr[j]) {
    //         return true
    //     } 
    //   }
    // }
    // return false
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"))
  console.log(palindrome("My age is 0, 0 si ega ym."))
  