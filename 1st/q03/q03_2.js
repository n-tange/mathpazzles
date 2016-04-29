for (var card = 1; card <= 100; card++) {
    var close = false;
    for (var divisor = 1; divisor <= 100; divisor++) {
        if (card % divisor === 0) {
            close = !close;
        }
    }
    if (close) console.log(card);
}
