// 用于处理含有特殊字符串的字符串，处理后的结果直接放到浏览器的url中是可以解析的

const str = "?a=45&b=89"

const strOther = encodeURIComponent(str)

console.log(strOther)  // %3Fa%3D45%26b%3D89
console.log(str) // ?a=45&b=89