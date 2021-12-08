// test() 方法用于检索字符串中指定的值。返回 true 或 false。
// test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。

var str1 = "123";
var reg = RegExp(/3/);
console.log(reg.test(str1)); // true


const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// expected output: true


console.log(globalRegex.test(str));
// expected output: true

// 使用 test()
// 一个简单的例子，测试 "hello" 是否包含在字符串的最开始，返回布尔值。

let str2 = 'hello world!';
let result = /^hello/.test(str2);
console.log(result); // true