function palindrome(str) {
    const splitStr = str.split("")
    const reversedStr = [...splitStr].reverse()
  
    for (var i = 0; i < splitStr.length; i++) {
      for (var j = 0; j < reversedStr.length; j++) {
        if (splitStr[i] === reversedStr[j]) {
            return true
        } 
      }
    }
    return false
  }
  
  console.log(palindrome("not a palindrome"))
  console.log(palindrome("My age is 0, 0 si ega ym."))
  