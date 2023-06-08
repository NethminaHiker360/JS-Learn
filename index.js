var list = [];

function fibonacchiSeries(n) {
  var a = 0,
    b = 1;
  var count = 0;
  while (count < n) {
    if (count == 0) {
      list.push(0);
      count++;
    } else if (count == 1) {
      list.push(1);
      count++;
    } else {
      list.push(a + b);
      var c = b;
      b = a + b;
      a = c;
      count++;
    }
  }
  console.log(list);
}

fibonacchiSeries(8);
