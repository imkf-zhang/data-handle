// 这个方法俺也熟悉
function deleteSame(arr) {
  if (arr.length == 0 || arr.length == 1) {
    return;
  }
  let newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}
let arr = [1, 2, 3, 4, 5, 6, 2, 4];

console.log(deleteSame(arr))
