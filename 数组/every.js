let list = [89, 2, 3, 1, 5];
list.every((value, index) => {
    if(value > 1){
        console.log(value);     
        return true;
    }else{
        console.log(value);     // 1
        // return true;
    }
});
