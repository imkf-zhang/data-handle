// 定义一个新数组，并存放原数组的第一个元素，
// 然后将元素组一一和新数组的元素对比，若不同则存放在新数组中

// 错误总结： 数组的这个length是可以维护的就很坏事

const arr1 = [1,2,2]
function deleteRepetition (arr) {
  if (arr.length == 0 || arr.length == 1) {
    return arr
  }
  let newArr = [arr[0]]
  for (let index = 1; index < arr.length; index++) {
    for (let i = 0; i< newArr.length; i++) {
     if( arr[index] === newArr[i]) {
       continue
     }else {
       newArr.push(arr[index])
     }
    }
  }
  return newArr
}
// 上述为错的， 
// 1、 [1]    [1 , 2, 2]
// 2、 [1,2]   




console.log(deleteRepetition (arr1))




const arr = [1,2,2]
// console.log(deleteRepetition())

function deleteRepetition1 (arr) {
  if (arr.length == 0 || arr.length == 1) {
    return arr
  }
  let newArr = [arr[0]]
  for (let index = 1; index < arr.length; index++) {
    for (let i = 0; i< newArr.length; i++) {
     if( arr[index] === newArr[i]) {
       break
     }
       newArr.push(arr[index])
     
    }
  }
  return newArr
}
// 上述也是错误的，原因是newArr.length的可维护性，没法比
console.log(deleteRepetition1(arr))


// 正确的思路   剥离出来
function deleteRepetition2 (arr) {
  if (arr.length == 0 || arr.length == 1) {
    return arr
  }
  let newArr = [arr[0]]
  for (let index = 1; index < arr.length; index++) {
    let repeat = false
    for (let i = 0; i< newArr.length; i++) {
     if( arr[index] === newArr[i]) {
       repeat = true
       break
     }
    }
    if(!repeat) {
      newArr.push(arr[index])
    }
  }
  return newArr
}
const num = [1,2,3,4,5,1,3,4,6,1]
console.log(deleteRepetition2(num))  // deleteRepetition2