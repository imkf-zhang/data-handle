// charAt() 方法从一个字符串中返回指定的字符。

// 语法
// str.charAt(index)

// 参数
// index
// 一个介于0 和字符串长度减1之间的整数。 (0~length-1)
// 如果没有提供索引，charAt() 将使用0。
 
// 描述
// 字符串中的字符从左向右索引，第一个字符的索引值为 0，最后一个字符（假设该字符位于字符串 stringName 中）
// 的索引值为 stringName.length - 1。 如果指定的 index 值超出了该范围，则返回一个空字符串。


let str = "abcdefg"

console.log(str.charAt(0)) // a
console.log(str[0]) // a

console.log(str.charAt(9)) // 空字符串
console.log(str[9]) // undefined

// 二者区别：如果找不到字符，[ ] 返回 undefined，而 charAt() 返回空字符串。