/**
 * https://leetcode.com/problems/merge-two-sorted-lists/#/description
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

'use strict';

require("./common");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var sentinel = new ListNode(0),
        d = sentinel,
        c1 = l1,
        c2 = l2,
        nums = [];
    while (c1 || c2) {
        if (c1) {
            nums.push(c1.val);
            c1 = c1.next;
        }
        if (c2) {
            nums.push(c2.val);
            c2 = c2.next;
        }
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length; i++) {
            d.next = new ListNode(nums[i]);
            d = d.next;
    }
    return sentinel.next;
};

/**
 * Another one from Solutions https://leetcode.com/problems/merge-two-sorted-lists/#/solutions
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
mergeTwoLists = function (l1, l2) {
    var dummy = new ListNode(),
        tail = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 ? l1 : l2;
    return dummy.next;
};

var test = function () {
    return mergeTwoLists(arguments[0], arguments[1]);
};

console.log(test(createList([0]), createList([])).toString() === createList([0]).toString());
console.log(test(createList([]), createList([])) === createList([]) ? "true" : "false");
console.log(test(createList([1, 3, 4]), createList([0])).toString() === createList([0, 1, 3, 4]).toString());
console.log(test(createList([5]), createList([1, 2, 4])).toString() === createList([1, 2, 4, 5]).toString());
