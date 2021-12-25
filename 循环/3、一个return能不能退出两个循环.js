const array = [ [12,13,45], [12,56,23], [1,6,5]]

for (let index = 0; index < array.length; index++) {
  for (let i = 0; i < array[index].length; i++) {
    if( array[index][i] === 45) {
      console.log('找到了')
      return;
    }
  }
  console.log(`循环了${index}次`)
}

// return 可以直接终止多重循环