// find方法主要应用与 查找第一个符合条件的数组元素,找到后立马返回,跟some和every一样
// 返回通过测试（参数函数内判断）的数组的第一个元素的值

// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

// find的参数是一个回调函数，在回调函数中写你要查找元素的条件
// 数组中的每一个元素都会调用一次函数执行
// 条件成立为true的时候返回该元素,

var arrww = [1, 2, 3, 4];

function hello() {
  return arrww.map((item) => item * 6);
}
console.log(hello()); //[ 6, 12, 18, 24 ]

const arr = [2, 5, 9, 36];
const findItem =  arr.find(item  => item>35) 

console.log(findItem) // 36

const findItem2 =  arr.find(item  => item>38) 
console.log(findItem2) // undefined

// findIndex()与find()的使用方法相同，findIndex()当中的回调函数也是接收三个参数，与find()相同。

// findIndex()方法实现是通过循环遍历查找。应用场景广泛，可以查找大于等于小于，表达式可以随便写。
// 实际上相当于一个for循环，只不过找到了你不需要自己退出。
// 返回的是索引

console.log(arr.findIndex(item => item === 5)) // 1
console.log(arr.findIndex(item => item === 37)) // -1

