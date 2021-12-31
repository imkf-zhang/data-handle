// es6中讲函数的时候有说过在es6中的函数形参默认值
// 没有es6的时候，大家是怎么给函数形参设置默认值的

function hello(params, query) {
  console.log(params);
  console.log(query)
}
hello('ni','hao') // ni   hao
hello('you') // you  undefined
