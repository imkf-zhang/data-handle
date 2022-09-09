function callback(params) {
  console.log("callback拿到的值", params) // callback拿到的值 kate
  return params
}
function person(name,func) {
  console.log("参数为",name) // 参数为 kate
  func(name)
}
setTimeout(function() {
  person('kate',callback)
}, 2000)