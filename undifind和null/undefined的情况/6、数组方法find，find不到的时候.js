// find方法主要应用与 查找第一个符合条件的数组元素,找到后立马返回,跟some和every一样
// 返回通过测试（参数函数内判断）的数组的第一个元素的值

// find的参数是一个回调函数，在回调函数中写你要查找元素的条件
// 数组中的每一个元素都会调用一次函数执行
// 条件成立为true的时候返回该元素,

var arrww = [1,2,3,4]

function hello() {
  return arrww.map( item => item*6)
}
console.log(hello())
