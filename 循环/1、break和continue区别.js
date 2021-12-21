for (let index = 0; index < 10; index++) {
  if( index === 3) {
    continue
  }
  console.log(index)
}
// 0
//1
//2
//4
//5
//6
//7
//8
//9
console.log('-----------------')
for (let index = 0; index < 10; index++) {
  if(index == 3) {
    break
  }
  console.log(index)
}
//0
//1
//2