// 可选的链接运算符（?.）允许读取位于连接对象链深处的属性的值，
// 而不必明确验证链中的每个引用是否有效。

// 问题描述：假设你有一个data对象，并且想要安全地访问data.test.value。
// 首先，你需要检查：data 是否被定义。data.test 是否被定义。

const data = { test: { value: 1 } };
if (data && data.test) {
  console.log(data.test.value); // 1
}
const value = data?.test?.value;
console.log(value); // 在浏览器环境下其实是可以的,node环境下确执行不了

// ********* 可选链操作符为安全访问对象的某个属性值提供了便利，如果你不判断直接去用某个对象的某个属性很容易会引起错误

// 再举一个例子
// 思考一个存在嵌套结构的对象 obj。不使用可选链的话，查找一个深度嵌套的子属性时，需要验证之间的引用，例如：
const obj = { first: { age: 16 } };
let nestedProp = obj.first && obj.first.second;

// 为了避免报错，在访问obj.first.second之前，要保证 obj.first 的值既不是 null，也不是 undefined。如果只是直接访问 obj.first.second，而不对 obj.first 进行校验，则有可能抛出错误。

// 有了可选链操作符（?.），在访问 obj.first.second 之前，不再需要明确地校验 obj.first 的状态，再并用短路计算获取最终结果：

let nestedPropp = obj.first?.second;
// 通过使用 ?. 操作符取代 . 操作符，JavaScript 会在尝试访问 obj.first.second 之前，
// 先隐式地检查并确定 obj.first 既不是 null 也不是 undefined。如果obj.first 是 null 或者 undefined，表达式将会短路计算直接返回 undefine
