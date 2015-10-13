//bubbleSort

var swap = function (i, j, array) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

var bubbleSort = function (array){
  var len = array.length;

  while (true) {
    var swaps = false;
    for (var i = 0; i < len - 1; i++) {
      // do a swap
      if (array[i] > array[i+1]) {
        swaps = true;
        swap(i, i + 1, array);
      }
    }
    if (!swaps) { break; }
  }
  return array;
}

console.log(bubbleSort([2,4,5,1,3,6]))
