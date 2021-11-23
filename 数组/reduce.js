const arr = [2,4,6,9]

const sum = arr.reduce((ljq, current) => {
    return ljq = ljq　+ current
})
console.log(sum)  // 21


const callback = (previousValue, currentValue,index, array) => previousValue + currentValue;
const sum1 = arr.reduce(callback, 5)  // 26
console.log(sum1)

// reduce() 方法对数组中的每个元素执行一个
// 由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值

// reduce其实有两个参数，一个是函数（该函数接受四个参数），  另一个是初始累积器的值



// 回调函数接收4个参数:
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)
// 您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。

// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

// 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，
// accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有

// 注意：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，
//跳过第一个索引。如果提供initialValue，从索引0开始。