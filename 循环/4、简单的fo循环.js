let arr = [1,2,3,4,5]

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index])
}
// 1
// 2
// 3
// 4
// 5

//当循环的数组没有变化的时候，可以将数组的长度储存在一个变量中，会提高效率
for (let index = 0 , len = arr.length; index < len; index++) {
  console.log(arr[index])
}