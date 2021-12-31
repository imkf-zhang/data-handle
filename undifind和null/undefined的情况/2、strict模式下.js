// 在JS的严格模式下（“use strict”），
//没有明确的主体，this指的就是undefined。
'use strict'
console.log(this);
function hello(param) {
  console.log(this);
}
hello()
