const arr = [1, 3, 5, 9, 12];
arr.forEach((item, index) => {
  console.log(item, index);
  //1 0
  //3 1
  //5 2
  //9 3
  //12 4
});
arr.forEach((item, index) => {
  item = item +  1;
});
console.log(arr);   // [ 1, 3, 5, 9, 12 ]  


// forEach就是一个简单的循环作用，不会去改变原数组，也没有返回值

// 没有返回值

// 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具
