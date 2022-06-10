const arr: number[] = [ 2, 5, 7, 8, 9, 56]

let flag: boolean = arr.some(item => {
  if(item === 56) {
    console.log(item)
   return true
  }else {
    console.log(item)
    return false
  }
} )