// 这个就很有趣，先排序，然后我在来比较这不是好了很多

const arr2 = [0, 2, 5, 6, 8, 1, 5, 3];

function delectRepetition(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  let newArr = arr.sort();
  console.log(newArr)
  let quchong = [arr[0]];
  for (let index = 0; index < newArr.length; index++) {
    if (quchong[index] !== newArr[index + 1]) {
      quchong.push( newArr[index + 1]);
    }
  }
  return quchong;
}
console.log(delectRepetition(arr2));
