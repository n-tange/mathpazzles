//カードの位置
for (var card = 1; card <= 100; card++) {
  // カードは最初閉じられている
    var close = true;
    //約数を求める(1以外の約数が偶数個あると裏となる)
    for (var divisor = 2; divisor <= 100; divisor++) {
        if (card % divisor === 0) {
            close = !close;
        }
    }
    if (close) console.log(card);
}
