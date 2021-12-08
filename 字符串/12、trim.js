var str = "       hello  world";

var str1 = str.trim();

console.log(str); // 不变
console.log(str1); // hello  world

// trim() 方法删除字符串两端的空白符：

// 警告：Internet Explorer 8 或更低版本不支持 trim() 方法。
// 如需支持 IE 8，您可搭配正则表达式使用 replace() 方法代替：

// var str = "       Hello World!        ";
// alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

// 您还可以使用上面的 replace 方案把 trim 函数添加到 JavaScript String.prototype：

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}
var str = "       Hello World!        ";
str.trim();
