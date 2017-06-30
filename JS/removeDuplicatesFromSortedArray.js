/**
 https://leetcode.com/problems/remove-duplicates-from-sorted-array/#/description
 Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.

 For example,
 Given input array nums = [1,1,2],

 Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
 */

'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var i, j;
    if (nums.length === 0 || nums.length === 1) return nums.length;
    i = 0;
    j = 1;
    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            i++;
            nums[i] = nums[j];
            j++;
        }
    }
    return ++i;
};

/**
 * Another one from Solutions
 */

var test = function () {
    return removeDuplicates(arguments[0]);
};

console.log(test([1, 1, 2]) === 2);
console.log(test([0, 0, 0, 1, 1, 2]) === 3);
console.log(test([1, 1, 2, 2, 3]) === 3);
console.log(test([1, 1, 2, 2, 3, 4, 5, 6, 7, 7]) === 7);

