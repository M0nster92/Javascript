function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;//number position in array
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 45)