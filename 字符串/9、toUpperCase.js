var text1 = "Hello World"
console.log(text1.toUpperCase())  // HELLO WORLD
console.log(text1) //  Hello World

// 不会改变原来的字符串，会返回一个新的字符串

// toUpperCase() 方法将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）

// 语法
// str.toUpperCase()
// 返回值
// 一个新的字符串，表示转换为大写的调用字符串。

// 错误处理
// TypeError(类型错误)
// 在 null 或 undefined类型上调用，例如：String.prototype.toUpperCase.call(undefined).

