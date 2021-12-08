let str = "123456789"
// substring() 类似于 slice()。
console.log(str.substring(1,3)) // 23
console.log(str) // 123456789


// substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

// 语法
// str.substring(indexStart[, indexEnd])

// 参数
// indexStart
// 需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。
// indexEnd
// 可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

// 返回值
// 包含给定字符串的指定部分的新字符串。  不改变原来的

// 描述
// substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。特别地：

// 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
// 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
// 如果任一参数小于 0 或为 NaN，则被当作 0。
// 如果任一参数大于 stringName.length，则被当作 stringName.length。
// 如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。见下面的例子。