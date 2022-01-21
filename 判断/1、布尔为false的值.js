const str = "",
  num = 0,
  buer = false,
  nan = NaN,
  undfind = undefined,
  nu = null;


  console.log(Boolean(num))  // false
  console.log(Boolean(buer)) // false
  console.log(Boolean(nan)) // false
  console.log(Boolean(undfind)) //false
  console.log(Boolean(nu)) //false

  console.log(Boolean([]))  // true
  console.log(Boolean({}))  // true