// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

// let s = 'Hello world!';

// s.startsWith('Hello') // true
// s.endsWith('!') // true
// s.includes('o') // true

// 这三个方法都支持第二个参数，表示开始搜索的位置。

let s = 'Hello world!';

console.log(s.startsWith('world', 6))  // true
console.log(s.endsWith('Hello', 5))  // true
console.log(s.includes('Hello', 6))  // false

// 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，
// 而其他两个方法针对从第n个位置直到字符串结束。


console.log(s.includes('Hello', 1)) //false