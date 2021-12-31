function hello(params) {
  console.log('hello')
}
var namE = hello()
console.log(namE) // undefined


function nihao(params) {
  console.log('nihao')
  return
}

console.log(nihao()) // undefined