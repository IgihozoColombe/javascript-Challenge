var arr = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arr2) {
  var half = Math.floor(arr2.length / 2);
  for (var i = 0; i < half; i++) {
    var temp = arr2[arr2.length - 1 - i];
    arr2[arr2.length - 1 - i] = arr2[i];
    arr2[i] = temp;
  }
  return arr2;
}
console.log(reverseArrayInPlace(arr));