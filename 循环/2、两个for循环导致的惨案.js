for (let index = 0; index < 5; index++) {
  for (let i = 0; i < 3; i++) {
    if(i == 2) {
      continue
    }
    console.log(i)
  }
  console.log(index)
}

//  continue是正经的continue ，只跳出一层循环
//  实际上是在一个劲的在循环里面的那个循环