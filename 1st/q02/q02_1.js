//Stringに逆転関数を追加
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
};

// var op = ["*", "+", "-", "/", ""];
var op = ["*", ""];

function operation(base, midStream, operator) {
    var converted = midStream.replace(",", operator);
    if (converted.indexOf(",") > -1) {
        op.forEach(function(val, idx, arr) {
            operation(base, converted, val);
        });
        return;
    }
    if (isNaN(converted)) {
        var calc = eval(converted);
        if (base == String(calc).reverse()) {
            console.log(base + ":" + calc + "=" + converted);
        }
    }
}

for (var i = 1000; i < 10000; i++) {
    var val = String(i);
    operation(val, val.split("").join(","), ",");
}
