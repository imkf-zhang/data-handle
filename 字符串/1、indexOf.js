var str1 = "123";


// indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，
// 从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。

// 语法:
// str.indexOf(searchValue [, fromIndex])

// searchValue
// 要被查找的字符串值。
// 如果没有提供确切地提供字符串，searchValue 会被强制设置为 "undefined"， 然后在当前字符串中查找这个值。
// 举个例子：'undefined'.indexOf() 将会返回0，因为 undefined 在位置0处被找到，但是 'undefine'.indexOf() 将会返回 -1 ，
// 因为字符串 'undefined' 未被找到。


// fromIndex 可选
// 数字表示开始查找的位置。可以是任意整数，默认值为 0。
// 如果 fromIndex 的值小于 0，或者大于 str.length ，那么查找分别从 0 和str.length 开始。（译者注：  fromIndex 的值小于 0，等同于为空情况； 
// fromIndex 的值大于或等于 str.length ，那么结果会直接返回 -1 。）
// 举个例子，'hello world'.indexOf('o', -5) 返回 4 ，
// 因为它是从位置0处开始查找，然后 o 在位置4处被找到。另一方面，'hello world'.indexOf('o', 11) 
// （或 fromIndex 填入任何大于11的值）将会返回 -1 ，因为开始查找的位置11处，已经是这个字符串的结尾了。


// 返回值
// 查找的字符串 searchValue 的第一次出现的索引，如果没有找到，则返回 -1。

// 若被查找的字符串 searchValue 是一个空字符串，将会产生“奇怪”的结果。
// 如果 fromIndex 值为空，或者 fromIndex 值小于被查找的字符串的长度，返回值和以下的 fromIndex 值一样
'hello world'.indexOf('') // 返回 0
'hello world'.indexOf('', 0) // 返回 0
'hello world'.indexOf('', 3) // 返回 3
'hello world'.indexOf('', 8) // 返回 8
// 另外，如果 fromIndex 值大于等于字符串的长度，将会直接返回字符串的长度（str.length）：
'hello world'.indexOf('', 11) // 返回 11
'hello world'.indexOf('', 13) // 返回 11
'hello world'.indexOf('', 22) // 返回 11
// 返回值总结:
// 从前面一个例子可以看出，
// 被查找的值是空值时，
// Javascript将直接返回指定的索引值。从后面一个例子可以看出，被查找的值是空值时，Javascript将直接返回字符串的长度。


"Blue Whale".indexOf("Blue")       // 返回 0
"Blue Whale".indexOf("Blute")      // 返回 -1
"Blue Whale".indexOf("Whale", 0)   // 返回 5
"Blue Whale".indexOf("Whale", 5)   // 返回 5
"Blue Whale".indexOf("", -1)       // 返回 0
"Blue Whale".indexOf("", 9)        // 返回 9
"Blue Whale".indexOf("", 10)       // 返回 10
"Blue Whale".indexOf("", 11)       // 返回 10

// indexOf 方法是区分大小写的。例如，下面的表达式将返回 -1：
"Blue Whale".indexOf("blue")      // 返回 -1

// 使用 indexOf 统计一个字符串中某个字母出现的次数
// 在下例中，设置了 count 来记录字母 e 在字符串 str 中出现的次数：
// 翻译：生存还是毁灭？这是个问题。（莎士比亚《哈姆雷特》）
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}

console.log(count); //  4




console.log(str1.indexOf('2',1))  // 1
console.log(str1.indexOf('4'))  // -1

