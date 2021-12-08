const arr = [2,4,6,9]
const arrOther = arr.filter( (item,index) => {
    return item * 2 === 4
} )
console.log(arrOther)  //[ 2 ]
console.log(arr) //[ 2, 4, 6, 9 ]


// 返回的是是一个数组
// 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

// 每次循环都根据判断 定义的条件进行一个判断
// 返回的是一个布尔值，如果是true就push到数组
// 中

// var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
// 用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：


// 过滤么，其实顾名思义大致就知道这个函数是在干么了