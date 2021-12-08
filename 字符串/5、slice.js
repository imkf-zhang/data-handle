// slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

var str = "123456789"

let strOther = str.slice(1,5)

console.log(str)  // 123456789
console.log(strOther) //2345  前闭后开
console.log(str.slice(10))  // 截取到了一个空字符串
console.log('')
console.log(typeof str.slice(1,1))  // string


// 语法
// str.slice(beginIndex[, endIndex])

// 参数
// beginIndex
// 从该索引（以 0 为基数）处开始提取原字符串中的字符。
// 如果值为负数，会被当做 strLength + beginIndex 看待，
// 这里的strLength 是字符串的长度（例如， 如果 beginIndex 是 -3 则看作是：strLength - 3）
// endIndex
// 可选。在该索引（以 0 为基数）处结束提取字符串。
// 如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，
// 则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度
// (例如，如果 endIndex 是 -3，则是, strLength - 3)。

// 返回值
// 返回一个从原字符串中提取出来的新字符串

// 描述
// slice() 从一个字符串中提取字符串并返回新字符串。在一个字符串中的改变不会影响另一个字符串。
// 也就是说，slice 不会修改原字符串（只会返回一个包含了原字符串中部分字符的新字符串）。

// slice() 提取的新字符串包括beginIndex但不包括 endIndex。下面有两个例子。 前闭后开
// 例 1：str.slice(1, 4) 提取第二个字符到第四个字符（被提取字符的索引值（index）依次为 1、2，和 3）。
// 例 2：str.slice(2, -1) 提取第三个字符到倒数第一个字符。