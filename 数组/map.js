const arr = [2, 4, 6, 9];

const arrOther = arr.map((item, index) => {
  return item * 2;
});

console.log(arrOther); // [ 4, 8, 12, 18 ]

// 生成一个新数组并且作为返回值返回出去
// 原数组并没有被改变

// map()
// 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

var reformattedArray = kvArray.map(function (obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformattedArray) //[ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
console.log(kvArray)
// [ { key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 } ]