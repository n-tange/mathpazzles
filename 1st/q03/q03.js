var cards = new Array(100);

for (var increment = 2; increment <= cards.length; increment++) {
    var idx = increment;
    while (idx < cards.length) {
        cards[idx - 1] ^= true;
        idx += increment;
    }
}

for (var i = 0; i < cards.length; i++) {
    if (!cards[i]) console.log(i + 1);
}
