let i = 1,o = 1;
let k = i++;
let j = ++o;

console.log(k,i)  //1   2  （后++）先把自己先赋值给k，然后自己再++
console.log(j,o)  //2   2   （先++）先把自己执行++操作，再把结果赋值给j





let a = 10,b = 20,c = 30;
++a; // 11
a++; // 12
e = ++a + ++b + c++ + a++;  // 13 + 21 + 30 + 13 = 77

console.log(e)  // 77