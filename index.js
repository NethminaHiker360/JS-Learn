function fibonacchiSeries(n) {
    var list = [];
    if(n==1){
        list.push(0);
    }else if(n==2){
        list.push(0,1);
    }else{
        list.push(0,1)
        var count=2;
        while(count<n){
            list.push(list[list.length-2]+list[list.length-1]);
            count++;
        }
    }
  console.log(list);
}

fibonacchiSeries(3);
