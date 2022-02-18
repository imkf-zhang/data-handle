var a = { n: 1};  // 干了什么，开辟了一个空间生成了一个对象， a是生成对象的索引
// 这个a可以叫为prevA的索引{n:1}

console.log(a)  //{ n: 1 }

// a.x是一个表达式计算，获取a.x的计算结果，缓存，等待后面的计算
a.x = a = { n: 2 } // 这个a可以叫做nextA的索引，存的值是{n： 2}

console.log(a.x)  // undefined   a.x 去获取{n: 2}上的不存在属性可不就是等于undefined
console.log(a) // { n: 2 }

// 试一试这种：
// a.x = a = { n: 2, x:5 }  这样打印的话的结果就是5


// 可不可以这个理解：我的理解哈,网上说的众说不一，就近原则，你后面声明了一个a.x 那么我就去后面得这个a上取，a.x ，没有所以就是undefined

// 试一试这种：
// let a1 
// a.x = a1 = { n: 2 } 
// console.log(a) //{ n: 1, x: { n: 2 } }