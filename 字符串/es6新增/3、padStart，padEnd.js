// ES2017 引入了字符串补全长度的功能。
// 如果某个字符串不够指定长度，会在头部或尾部补全。
// padStart()用于头部补全，padEnd()用于尾部补全。

console.log("a".padStart(6, 'jk'))  //jkjkja 
console.log('b'.padEnd(6, 'nm')) //bnmnmn