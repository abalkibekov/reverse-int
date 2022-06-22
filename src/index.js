module.exports = function reverse (n) {
    let nStr = '' + Math.abs(n);
    let resultStr = '';
    for (let i = nStr.length - 1; i >= 0; i--) {
        resultStr += nStr[i];
    }
    return +resultStr;
}
