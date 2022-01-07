// includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，
// 如果包含则返回 true，否则返回 false。

// 语法：
// arr.includes(valueToFind[, fromIndex])

// valueToFind
// 需要查找的元素值。

// Note: 使用 includes()比较字符串和字符时是区分大小写的。

// fromIndex 可选
// 从fromIndex 索引处开始查找 valueToFind。如果为负值，
// 则按升序从 array.length + fromIndex 的索引开始搜 
// （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。

console.log([1, 2, 3].includes(3, -1)) //true

console.log([1,2,5].includes(2+'')) // false  区分大小写的