function convertToRoman(num) {
  const values = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (let key in values) {
    // console.log(key)
    result += key.repeat(Math.floor(num / values[key]));
    num %= values[key];
  }
  console.log(result, num);
  return result;
}

convertToRoman(36);
