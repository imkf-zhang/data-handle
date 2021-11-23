const arr = [2,4,6,9]

// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。
// 它返回的是一个Boolean类型的值。

// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。
// 它返回一个布尔值。

const resolveComponent = arr.some((item,index) => {
    console.log(index)
    return item > 2
})

console.log(resolveComponent) // true   找到后立马就跳出循环了



const res = arr.every((item,index) => {
    console.log(index)
    return item > 2
})
console.log(res)  // fale   找到后立马就跳出循环了