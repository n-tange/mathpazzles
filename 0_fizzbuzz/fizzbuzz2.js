Number.prototype.fizz = function() {
    return this % 3 === 0 ? "fizz" : "";
};
Number.prototype.buzz = function() {
    return this % 5 === 0 ? "buzz" : "";
};

for (var i = 1; i <= 15; i++) {
    var candidate = Number(i).fizz() + Number(i).buzz();
    console.log(candidate ? candidate : i);
}
