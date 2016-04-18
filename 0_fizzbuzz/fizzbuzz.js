var base = function(chk, word, val) {
    return (val % chk === 0 ? word : "");
};
var fizz = base.bind(null, 3, "fizz");
var buzz = base.bind(null, 5, "buzz");

for (var i = 1; i <= 15; i++) {
    var result = fizz(i) + buzz(i);
    console.log(result ? result : i);
}
