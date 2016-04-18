var number = 35;

//２進数文字列に変換
var binaryStr = number.toString(2);
console.log(typeof(binaryStr) + ":" + binaryStr);

//基数を指定して数値に変換
var changeNum = parseInt(binaryStr, 2);
console.log(typeof(changeNum) + ":" + changeNum);
