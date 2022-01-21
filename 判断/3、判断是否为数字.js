// isNaN()  是否是NaN

// Number()  无法转换为数字的值返回NaN

// isFinite() 是不是一个无穷数 内部调用了Number
console.log(isFinite("")); // true
console.log(isFinite("lll")); // false

console.log(Number("")); // 0
console.log(Number("3")); // 3
console.log(Number("-3")); // -3
console.log(Number("3LL")); // NaN
console.log(Number("-3LL")); // NaN
console.log(Number("3.33")); // 3.33

console.log(Number(Infinity)); //Infinity
console.log(Number(-Infinity)); //-Infinity
console.log(Number(2e2)); //200

console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN
console.log(Number(null), "555"); // 0
console.log(Number(0)); // 0

console.log(Number([])); // 0
console.log(Number([1, 2, 4])); // NaN
console.log(Number({})); // NaN

function isNum(params) {
  if (params === "" || params === false || params === null || params !== []) {
    return false;
  } else {
    const flag = Number(params);
    if (flag === Infinity || flag === -Infinity) {
      return false;
    } else if (isNaN(flag)) {
      return false;
    } else {
      return true;
    }
  }
}
console.log("------------")
console.log(isNum(Infinity))
console.log(isNum(""))



 // 网上
//  如果 parseFloat 在解析过程中遇到了正号（+）、
// 负号（- U+002D HYPHEN-MINUS）、数字（0-9）、
// 小数点（.）、或者科学记数法中的指数（e 或 E）以外的字符，
// 则它会忽略该字符以及之后的所有字符，返回当前已经解析到的浮点数。
// // 第二个小数点的出现也会使解析停止（
// 在这之前的字符都会被解析）。

// 参数首位和末位的空白符会被忽略。

// 如果参数字符串的第一个字符不能被解析成为数字,则 parseFloat 返回 NaN。

// parseFloat 也可以解析并返回 Infinity。

// parseFloat解析 BigInt 为 Numbers, 丢失精度。因为末位 n 字符被丢弃。
function isNumber(num){
  return !isNaN(parseFloat(num)) && isFinite(num);
}
console.log("------------")
console.log(parseFloat("")) // NaN
console.log(parseFloat([])) // NaN
console.log(parseFloat("222w")) // 222
console.log(isFinite("222w")) //false
console.log(isNumber("")) // false
console.log(isNumber("222w")) // false
