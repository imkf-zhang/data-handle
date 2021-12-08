// 字符串有length属性

var str = "78979"

console.log(str.length)  // 5


// 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
const [a, b, c, d, e] = 'hello';
console.log(a,b,c,d,e)
// 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len) // 5
let {length} = 'hello';
console.log(length) // 5