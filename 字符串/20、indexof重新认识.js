// indexeof去查找空子字符串返回的是 0
console.log("addd".indexOf("")); // 0'

var s = "12345";
console.log(s.indexOf(1)); //0
console.log(s.indexOf("1")); //0

// 相信大家已经发现特点，
// 也就是string的IndexOf()是对数据进行了隐式类型转换的，
// 如果参数是数值它会转换为字符来进行查询然后返回索引，
// 本质原因是什么呢，那就是 我们js底层代码中String.prototype.indexOf()
// 使用的是==进行比较判断；
// Number类型的IndexOf()
// 醒醒，Number类型哪来的indexOf()方法，会直接报错的好吗，
// 如果想对数值类型的进行查询索引，可以将数值转换为字符再进行查询，方法有很多：
// - String()
// - .toString()
// - 与空字符’'进行+拼接
