// splice是数组方法中比较强大的方法
// 可以增加，可以删除，可以替换

// 并以数组的方式返回修改的内容，
// 主意此方法会修改原数组

// 语法：
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// start​
// 指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；
// 如果是负值，则表示从数组末位开始的第几位（从-1计数，
// 这意味着-n是倒数第n个元素并且等价于array.length-n）；
// 如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

// deleteCount 可选
// 整数，表示要移除的数组元素的个数。
// 如果 deleteCount 大于 start 之后的元素的总数，
// 则从 start 后面的元素都将被删除（含第 start 位）。
// 如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，
//   如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
// 如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。

// item1, item2, ... 可选
// 要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。

// 返回值
// 由被删除的元素组成的一个数组。如果只删除了一个元素，
// 则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

// 插入demo:
let fruit = [1, 2, 4, 6];
let arr = fruit.splice(1, 0, 99);
console.log(fruit); //[ 1, 99, 2, 4, 6 ] 直接在所设定的位置插入
console.log(arr); //[]

// 删除demo:
let color = ["red", "blue", "yellow"];
let arr1 = color.splice(1, 1);
console.log(color); //[ 'red', 'yellow' ]
console.log(arr1); //[ 'blue' ]

// 替换demo: 其实就是删除和插入的连环操作
let num = [1, 2, 3, 4];
let arr2 = num.splice(1, 1, 999);
console.log(num); //[ 1, 999, 3, 4 ]
console.log(arr2); // [ 2 ]

// 重点：
// 如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，
//   如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
// 如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
// splice会改变原数组

let num111 = [1, 5, 6, 4, 2];
let num222 = num111.splice();
console.log('num111',num111)
console.log('num222',num222)

