/**
 * https://leetcode.com/problems/reverse-integer/#/description
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var Int32Max = Math.pow(2, 31) - 1,
        res = '',
        l,
        s,
        i;
    if (Int32Max <= Math.abs(x)) return 0;

    s = '' + x;
    if (s.replace('0', '').length === 1) return ~~s[0];

    if (s[0] === '-') {
        res = '-';
        s = s.replace('-', '');
    }
    l = s.length - 1;
    for (i = 0; i <= l; i++) {
        res += s[l - i];
    }
    if (Math.abs(Number(res)) >= Int32Max) return 0;
    return ~~res;
};

/**
 * Another one from Solutions https://discuss.leetcode.com/topic/6104/my-accepted-15-lines-of-code-for-java/2
 * @param x
 * @returns {number}
 */
reverse = function (x) {
    var result = 0,
        tail,
        newResult;
    while (x !== 0) {
        tail = x % 10;
        newResult = ~~(result * 10 + tail);
        if (~~((newResult - tail) / 10) !== result) return 0;
        result = newResult;
        x = ~~(x / 10);
    }
    return result;
};

console.log(reverse(123) === 321);
console.log(reverse(-123) === -321);
console.log(reverse(100000000000006) === 0);
console.log(reverse(0000006) === 6);
console.log(reverse(6000000) === 6);
console.log(reverse(0) === 0);
console.log(reverse(1) === 1);
console.log(reverse(1534236469) === 0);
console.log(reverse(-2147483648) === 0);
console.log(reverse(-1563847412) === 0);

