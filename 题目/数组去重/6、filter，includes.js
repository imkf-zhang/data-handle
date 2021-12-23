// filter 将通过的测试元素 返回 组成一个新的数组
// 三元运算符其实可以不用做为的
const arr = [1,2,6,2,3,4,5,4]
const deleteSame = (arr) => {
  let newArr = []
  arr.filter(item => {
    newArr.includes(item) ? "" : newArr.push(item)
  })
  return newArr
};
console.log(deleteSame(arr)) //[ 1, 2, 6, 3, 4, 5 ]