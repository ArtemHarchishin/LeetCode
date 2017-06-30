'use strict';

/**
 *
 * @param nums {Array}
 * @returns {ListNode}
 */
function createList(nums) {
    if (nums.length === 0) return null;
    var root = new ListNode(),
        tail = root;
    for (var i = 0; i < nums.length; i++) {
        tail.next = new ListNode(nums[i]);
        tail = tail.next;
    }
    return root.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;

    this.toString = function () {
        var s = [];
        s.push(this.val);
        var cur = this.next;
        while (cur !== null) {
            s.push(cur.val);
            cur = cur.next;
        }
        return s.join(" -> ");
    };
}

global.createList = createList;
global.ListNode = ListNode;