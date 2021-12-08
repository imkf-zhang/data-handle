var str = "45641321465"
console.log(str.lastIndexOf('5'))  // 10

// 总结：
// 最后一次出现的索引值
// 从后往前检索
// 默认从正无穷往前检索，当检索位置小于0时就是从零往前检索
// 区分大小写


// lastIndexOf() 方法返回调用String 对象的指定值最后一次出现的索引，
// 在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1 。

// 该方法将从尾到头地检索字符串 str，看它是否含有子串 searchValue。
// 开始检索的位置在字符串的 fromIndex 处或字符串的结尾（没有指定 fromIndex 时）。
// 如果找到一个 searchValue，则返回 searchValue 的第一个字符在 str 中的位置。str中的字符位置是从 0 开始的。


// 语法
// str.lastIndexOf(searchValue[, fromIndex])

// 参数
// searchValue
// 一个字符串，表示被查找的值。如果searchValue是空字符串，则返回fromIndex。
// fromIndex可选
// 待匹配字符串searchValue的开头一位字符从 str的第fromIndex位开始向左回向查找。
// fromIndex默认值是 +Infinity。如果 fromIndex >= str.length ，则会搜索整个字符串。如果 fromIndex < 0 ，
// 则等同于 fromIndex == 0。

// 返回值
// 返回指定值最后一次出现的索引(该索引仍是以从左至右0开始记数的)，如果没找到则返回-1。

// 区分大小写
// lastIndexOf 方法区分大小写。例如，下面的表达式返回 -1：

"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1