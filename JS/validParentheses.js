/**
 https://leetcode.com/problems/valid-parentheses/#/description
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [],
        c;
    for (var i = 0; i < s.length; i++) {
        c = s[i];
        if (c === '(')
            stack.push(')');
        else if (c === '{')
            stack.push('}');
        else if (c === '[')
            stack.push(']');
        else if (stack.length === 0 || stack.pop() !== c)
            return false;
    }
    return stack.length === 0;
};

/**
 * Another one from Solutions
 */

var test = function () {
    return isValid(arguments[0]);
};

console.log(test("()") === true);
console.log(test("[]") === true);
console.log(test("{}") === true);
console.log(test("()[]{}") === true);
console.log(test("{)") === false);
console.log(test("(]") === false);
console.log(test("{()}") === true);
console.log(test("([)]") === false);
console.log(test("{([)]}") === false);



