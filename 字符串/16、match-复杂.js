// match() 方法检索返回一个字符串匹配正则表达式的结果。


// 语法
// str.match(regexp)

// 参数
// regexp
// 一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 
// 将其转换为一个 RegExp 。如果你没有给出任何参数并直接使用match() 方法 ，
// 你将会得到一 个包含空字符串的 Array ：[""] 。

// 返回值
// 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
// 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 
// 在这种情况下，返回的项目将具有如下所述的其他属性。

// 附加属性
// 如上所述，匹配的结果包含如下所述的附加特性。
// groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
// index: 匹配的结果的开始位置
// input: 搜索的字符串.
// 一个Array，其内容取决于global（g）标志的存在与否，如果未找到匹配则为null。
// 描述
// 如果正则表达式不包含 g 标志，str.match() 将返回与 RegExp.exec(). 相同的结果。



// 例子：match 使用全局（global）和忽略大小写（ignore case）标志
// 下例展示了 match 使用 global 和 ignore case 标志。A-E、a-e 的所有字母将会作为一个数组的元素返回。

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']


// 使用match()，不传参数
var str1 = "Nothing will come of nothing.";

str1.match();   // returns [""]