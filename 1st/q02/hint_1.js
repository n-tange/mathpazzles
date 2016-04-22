var myArray = "abcde".split("");
console.log(myArray);
console.log("--------");

//JavaScriptの配列の標準関数forEach。引数に関数オブジェクトを取る。
myArray.forEach(
  //第1引数は要素、第2引数は繰返位置、第3引数は元の配列。
  function(value, index, array){
    console.log("value:" + value);
    console.log("index:" + index);
    console.log(array);
  }
);
