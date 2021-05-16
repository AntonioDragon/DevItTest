var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 

function recLog(arr,index) {
    if (index>0){
        console.log(arr[arr.length-index])
        recLog(arr,index-1)
    }
    else
     return 0;    
}

console.log(arr);
recLog(arr,arr.length);