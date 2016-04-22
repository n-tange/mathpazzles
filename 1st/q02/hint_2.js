//階乗の関数
function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
}
//5*4*3*2*1=120
console.log(fact(5));
//4*3*2*1=24
console.log(fact(4));
