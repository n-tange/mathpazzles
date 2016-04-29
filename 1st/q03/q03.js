//100枚のカード（trueとなる値の時、表とする）
var cards = new Array(100);

//カードをめくる位置の増分値でループ
for (var increment = 2; increment <= cards.length; increment++) {
    var idx = increment;
    while (idx < cards.length) {
        //ビット演算子xorでカードを引っ繰り返す
        cards[idx - 1] ^= true;
        idx += increment;
    }
}

for (var i = 0; i < cards.length; i++) {
    if (!cards[i]) console.log(i + 1);
}
