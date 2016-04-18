//Stringに逆転関数を追加
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
};

//回文判定を関数オブジェクトとして作成
var reversible = function(num, notation) {
    return num.toString(notation) == num.toString(notation).reverse();
};

var num = 11;
while (true) {
    if (reversible(num, 2) && reversible(num, 8) && reversible(num, 10)) {
        console.log(num);
        break;
    }
    num += 2;
}
