// reapeat 方法返回一个新字符串, 表示将原字符串重复n次

console.log("x".repeat(3)) // 3

console.log('na'.repeat(0))  // 空字符串

// 参数如果是小数会取整，向下取整
console.log('na'.repeat(2.9)) // nana

// 参数无穷大或者是负数，会报错
// console.log('na'.repeat(Infinity))
// console.log('na'.repeat(-2))

// 但是，如果参数是 0 到-1 之间的小数，则等同于 0，
// 这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
console.log('na'.repeat(-0.6)) // 空字符串

// 参数NaN等同于0

console.log('na'.repeat(NaN))