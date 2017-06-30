/**
 https://leetcode.com/problems/roman-to-integer/#/description
 Given a roman numeral, convert it to an integer.
 Input is guaranteed to be within the range from 1 to 3999.
 */
'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var res, map, curNum, nextNum;
    res = 0;
    map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    for (var i = 0; i < s.length; i++) {
        curNum = map[s[i]];
        nextNum = map[s[i + 1]];
        res = curNum < nextNum ? res - curNum : res + curNum;
    }
    return res;
};

var test = function () {
    return romanToInt(arguments[0]);
};

console.log(test('I') === 1 ? '' : 'I');
console.log(test('D') === 500 ? '' : 'D');
console.log(test('M') === 1000 ? '' : 'M');
console.log(test('I') === 1 ? '' : 'I');
console.log(test('XXVI') === 26 ? '' : 'XXVI');
console.log(test('LI') === 51 ? '' : 'LI');
console.log(test('LXXVI') === 76 ? '' : 'LXXVI');
console.log(test('II') === 2 ? '' : 'II');
console.log(test('XXVII') === 27 ? '' : 'XXVII');
console.log(test('LII') === 52 ? '' : 'LII');
console.log(test('LXXVII') === 77 ? '' : 'LXXVII');
console.log(test('III') === 3 ? '' : 'III');
console.log(test('XXVIII') === 28 ? '' : 'XXVIII');
console.log(test('LIII') === 53 ? '' : 'LIII');
console.log(test('LXXVIII') === 78 ? '' : 'LXXVIII');
console.log(test('IV') === 4 ? '' : 'IV');
console.log(test('XXIX') === 29 ? '' : 'XXIX');
console.log(test('LIV') === 54 ? '' : 'LIV');
console.log(test('LXXIX') === 79 ? '' : 'LXXIX');
console.log(test('V') === 5 ? '' : 'V');
console.log(test('XXX') === 30 ? '' : 'XXX');
console.log(test('LV') === 55 ? '' : 'LV');
console.log(test('LXXX') === 80 ? '' : 'LXXX');
console.log(test('VI') === 6 ? '' : 'VI');
console.log(test('XXXI') === 31 ? '' : 'XXXI');
console.log(test('LVI') === 56 ? '' : 'LVI');
console.log(test('LXXXI') === 81 ? '' : 'LXXXI');
console.log(test('VII') === 7 ? '' : 'VII');
console.log(test('XXXII') === 32 ? '' : 'XXXII');
console.log(test('LVII') === 57 ? '' : 'LVII');
console.log(test('LXXXII') === 82 ? '' : 'LXXXII');
console.log(test('VIII') === 8 ? '' : 'VIII');
console.log(test('XXXIII') === 33 ? '' : 'XXXIII');
console.log(test('LVIII') === 58 ? '' : 'LVIII');
console.log(test('LXXXIII') === 83 ? '' : 'LXXXIII');
console.log(test('IX') === 9 ? '' : 'IX');
console.log(test('XXXIV') === 34 ? '' : 'XXXIV');
console.log(test('LIX') === 59 ? '' : 'LIX');
console.log(test('LXXXIV') === 84 ? '' : 'LXXXIV');
console.log(test('X') === 10 ? '' : 'X');
console.log(test('XXXV') === 35 ? '' : 'XXXV');
console.log(test('LX') === 60 ? '' : 'LX');
console.log(test('LXXXV') === 85 ? '' : 'LXXXV');
console.log(test('XI') === 11 ? '' : 'XI');
console.log(test('XXXVI') === 36 ? '' : 'XXXVI');
console.log(test('LXI') === 61 ? '' : 'LXI');
console.log(test('LXXXVI') === 86 ? '' : 'LXXXVI');
console.log(test('XII') === 12 ? '' : 'XII');
console.log(test('XXXVII') === 37 ? '' : 'XXXVII');
console.log(test('LXII') === 62 ? '' : 'LXII');
console.log(test('LXXXVII') === 87 ? '' : 'LXXXVII');
console.log(test('XIII') === 13 ? '' : 'XIII');
console.log(test('XXXVIII') === 38 ? '' : 'XXXVIII');
console.log(test('LXIII') === 63 ? '' : 'LXIII');
console.log(test('LXXXVIII') === 88 ? '' : 'LXXXVIII');
console.log(test('XIV') === 14 ? '' : 'XIV');
console.log(test('XXXIX') === 39 ? '' : 'XXXIX');
console.log(test('LXIV') === 64 ? '' : 'LXIV');
console.log(test('LXXXIX') === 89 ? '' : 'LXXXIX');
console.log(test('XV') === 15 ? '' : 'XV');
console.log(test('XL') === 40 ? '' : 'XL');
console.log(test('LXV') === 65 ? '' : 'LXV');
console.log(test('XC') === 90 ? '' : 'XC');
console.log(test('XVI') === 16 ? '' : 'XVI');
console.log(test('XLI') === 41 ? '' : 'XLI');
console.log(test('LXVI') === 66 ? '' : 'LXVI');
console.log(test('XCI') === 91 ? '' : 'XCI');
console.log(test('XVII') === 17 ? '' : 'XVII');
console.log(test('XLII') === 42 ? '' : 'XLII');
console.log(test('LXVII') === 67 ? '' : 'LXVII');
console.log(test('XCII') === 92 ? '' : 'XCII');
console.log(test('XVIII') === 18 ? '' : 'XVIII');
console.log(test('XLIII') === 43 ? '' : 'XLIII');
console.log(test('LXVIII') === 68 ? '' : 'LXVIII');
console.log(test('XCIII') === 93 ? '' : 'XCIII');
console.log(test('XIX') === 19 ? '' : 'XIX');
console.log(test('XLIV') === 44 ? '' : 'XLIV');
console.log(test('LXIX') === 69 ? '' : 'LXIX');
console.log(test('XCIV') === 94 ? '' : 'XCIV');
console.log(test('XX') === 20 ? '' : 'XX');
console.log(test('XLV') === 45 ? '' : 'XLV');
console.log(test('LXX') === 70 ? '' : 'LXX');
console.log(test('XCV') === 95 ? '' : 'XCV');
console.log(test('XXI') === 21 ? '' : 'XXI');
console.log(test('XLVI') === 46 ? '' : 'XLVI');
console.log(test('LXXI') === 71 ? '' : 'LXXI');
console.log(test('XCVI') === 96 ? '' : 'XCVI');
console.log(test('XXII') === 22 ? '' : 'XXII');
console.log(test('XLVII') === 47 ? '' : 'XLVII');
console.log(test('LXXII') === 72 ? '' : 'LXXII');
console.log(test('XCVII') === 97 ? '' : 'XCVII');
console.log(test('XXIII') === 23 ? '' : 'XXIII');
console.log(test('XLVIII') === 48 ? '' : 'XLVIII');
console.log(test('LXXIII') === 73 ? '' : 'LXXIII');
console.log(test('XCVIII') === 98 ? '' : 'XCVIII');
console.log(test('XXIV') === 24 ? '' : 'XXIV');
console.log(test('XLIX') === 49 ? '' : 'XLIX');
console.log(test('LXXIV') === 74 ? '' : 'LXXIV');
console.log(test('XCIX') === 99 ? '' : 'XCIX');
console.log(test('XXV') === 25 ? '' : 'XXV');
console.log(test('L') === 50 ? '' : 'L');
console.log(test('LXXV') === 75 ? '' : 'LXXV');
console.log(test('C') === 100 ? '' : 'C');