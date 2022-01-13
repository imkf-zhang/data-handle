var str = "123"
console.log(str.search("3")) // 2
console.log(str.search("4")) // -1
console.log(str.search("")) // 0

// sarch() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
// 如果没有找到任何匹配的子串，则返回 -1。

// 你注意了吗？indexOf() 与 search()是相等的。这两种方法是不相等的。区别在于：
// search() 方法无法设置第二个开始位置参数。
// indexOf() 方法无法设置更强大的搜索值（正则表达式）。



//search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。-----> 进行一些复杂的正则匹配搜索时用search 

// 语法
// str.search(regexp)

// 参数
// regexp
// 一个正则表达式（regular expression）对象
// 如果传入一个非正则表达式对象 regexp，则会使用 new RegExp(regexp) 隐式地将其转换为正则表达式对象。

// 返回值
// 如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。

// 描述
// 当你想要知道字符串中是否存在某个模式（pattern）时可使用 search()，类似于正则表达式的 test() 方法。
// 当要了解更多匹配信息时，可使用 match()（但会更慢一些），该方法类似于正则表达式的 exec() 方法。

