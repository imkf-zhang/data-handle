function deleteSame(arr) {
  if (arr.length == 0 || arr.length == 1) {
    return;
  }
  let newArr = [];
  arr.forEach((item) => {
    if (newArr.indexOf(item) == -1) {
      newArr.push(item);
    }
  });
  return newArr;
}
let arr = [1, 2, 3, 4, 5, 6, 2, 4];

console.log(deleteSame(arr))
