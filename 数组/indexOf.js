const arr = [1, 2, 4, 8, 45];
console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf("1")); //-1
// 可以看到array的indexOf()是不会进行隐式类型转换的，也就是说Array.prototype.indexOf（）
// 底层代码在实现的时候使用的是强等于=== 严格比较；