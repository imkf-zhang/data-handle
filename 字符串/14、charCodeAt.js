// charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元

// UTF-16 编码单元匹配能用一个 UTF-16 编码单元表示的 Unicode 码点。
// 如果 Unicode 码点不能用一个 UTF-16 编码单元表示（因为它的值大于0xFFFF），
// 则所返回的编码单元会是这个码点代理对的第一个编码单元) 。如果你想要整个码点的值，使用 codePointAt()。

// 语法
// str.charCodeAt(index)

// 参数
// index
// 一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。

// 返回值
// 指定 index 处字符的 UTF-16 代码单元值的一个数字；如果 index 超出范围，charCodeAt() 返回 NaN。

let str = "aABb"
console.log(str.charCodeAt(0)) //97
console.log(str.charCodeAt(1)) //65
console.log(str.charCodeAt(2)) //66
console.log(str.charCodeAt(3)) //98
