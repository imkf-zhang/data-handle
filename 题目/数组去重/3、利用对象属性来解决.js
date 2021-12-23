var obj = {};
console.log(obj.a); // undefined
// 让数组中的每一个值成为一个对象的一个属性就可以了


function delectRepeat(arr) {
  var obj = {};
  var res = [];
  for (let index = 0; index < arr.length; index++) {
    if (!obj[arr[index]]) {
      obj[arr[index]] = 1;
      res.push(arr[index]);
    }
  }
  return res;
}
const res = [1,2,3,4,6,8,3,1]

console.log(delectRepeat(res))


