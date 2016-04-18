var myString = "1234567890";

//0長文字で分解し配列化
var chgArray = myString.split("");
console.log(chgArray instanceof Array);
console.log(chgArray);

//配列の逆転を実施
var reverseArray = chgArray.reverse();
console.log(reverseArray);

//配列を0長文字で結合し文字列化
var reverseStr = reverseArray.join("");
console.log(typeof(reverseStr));
console.log(reverseStr);
