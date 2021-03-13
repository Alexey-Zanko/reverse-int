module.exports = function reverse (n) {
    if (n < 0) {
        n = -n; 
    };
    let str = String(n);
    str = str.split('').reverse().join('');
    n = Number(str);
    if (n < 0) {
        n = n * -1;
    }
    return n;  
}
