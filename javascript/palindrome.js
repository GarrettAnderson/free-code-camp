function palindrome(str) {
    const splitStr = str.split("")
    const reversedStr = splitStr.reverse()
  
    for (var i = 0; i < splitStr.length; i++) {
      for (var j = 0; j < reversedStr.length; j++) {
        if (splitStr[i] === reversedStr[j]) {
            return true
        } else {
          console.log(str) 
          return false
        } 
      }
    }
  }
  