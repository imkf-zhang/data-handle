// 当内部return true时退出循环   找到条件为真，就立马终止了这个循环   寻真而来 ||
var arr = [2, 5, 7, 8, 9, 56];
var flag = arr.some(function (item) {
    if (item === 8) {
        console.log(item);
        return true;
    }
    else {
        console.log(item);
        return false;
    }
});
console.log(flag)  // false
// 2
// 5
// 7
// 8

let arr1 = []
let flag1 = arr1.some(item => {
    if(item === 5) {
        console.log(item)
        return true
    }else {
        console.log(item)
        return false
    }
})
console.log(flag1)  // false