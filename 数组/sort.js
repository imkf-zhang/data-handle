const arr = [1, 5, 3, 6, 8];

const arr1 = arr.sort();
console.log(arr); //[ 1, 3, 5, 6, 8 ]
console.log(arr1); //[ 1, 3, 5, 6, 8 ]

// 该方法是对原数组进行一个排序

function compare(val1, val2) {
  if (val1 < val2) {
    return -1;
  } else if (val1 > val2) {
    return 1;
  } else {
    return 0;
  }
}

const arr2 = [1,5,88,55,22,99]
console.log(arr2.sort(compare)) //[ 1, 5, 22, 55, 88, 99 ]