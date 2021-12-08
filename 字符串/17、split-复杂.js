// 数组有join方法把数组转换为字符串
// 字符串有split方法把字符串，转换为数组


// 可以通过 split() 将字符串转换为数组：


var txt = "a,b,c,d,e";   // 字符串
let txt1 = txt.split(",");          // 用逗号分隔
let txt2 = txt.split(" ");          // 用空格分隔
let txt3 = txt.split("|");          // 用竖线分隔

let txt4 = txt.split("");          // 省略分隔

console.log(txt) // a,b,c,d,e
console.log(txt1) // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(txt2) // [ 'a,b,c,d,e' ]
console.log(txt3) // [ 'a,b,c,d,e' ]

console.log(txt4) 
// [
//     'a', ',', 'b',
//     ',', 'c', ',',
//     'd', ',', 'e'
//   ]

// 语法
// str.split([separator[, limit]])

// 参数
// separator
// 指定表示每个拆分应发生的点的字符串。
// separator 可以是一个字符串或正则表达式。
//  如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。
//  如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。
//  如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。

// limit
// 一个整数，限定返回的分割片段数量。当提供此参数时，
// split 方法会在指定分隔符的每次出现时分割该字符串，
// 但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，
// 它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。

// 返回值
// 返回源字符串以分隔符出现位置分隔而成的一个 Array 



// 如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。
let str = "abcdefg"
console.log(str.split("")) 
// [
//     'a', 'b', 'c',
//     'd', 'e', 'f',
//     'g'
//   ]