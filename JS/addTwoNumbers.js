/**
 * https://leetcode.com/problems/add-two-numbers/#/description
 */

function createList(nums) {
    var list = null,
        root = null;

    for (var i = 0; i < nums.length; i++) {
        if (list === null) {
            list = root = new ListNode(nums[i]);
        } else {
            root.next = new ListNode(nums[i]);
            root = root.next;
        }
    }
    return list;
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
    }
}

function addTwoNumbers(l1, l2) {
    var c1 = l1,
        c2 = l2,
        sentinel = new ListNode(0),
        d = sentinel,
        sum = 0;
    while (c1 || c2) {
        sum = ~~(sum / 10);
        if (c1) {
            sum += c1.val;
            c1 = c1.next;
        }
        if (c2) {
            sum += c2.val;
            c2 = c2.next;
        }
        d.next = new ListNode(sum % 10);
        d = d.next;
    }
    if (~~(sum / 10) === 1) d.next = new ListNode(1);
    return sentinel.next;
}

console.log(addTwoNumbers(createList([2, 4]), createList([5, 6, 4])).toString() === createList([7, 0, 5]).toString());
console.log(addTwoNumbers(createList([2, 4, 3]), createList([5, 6])).toString() === createList([7, 0, 4]).toString());
console.log(addTwoNumbers(createList([2, 4, 3]), createList([])).toString() === createList([2, 4, 3]).toString());
console.log(addTwoNumbers(createList([]), createList([5, 6, 4])).toString() === createList([5, 6, 4]).toString());
console.log(addTwoNumbers(createList([2, 4, 3]), createList([5, 6, 4])).toString() === createList([7, 0, 8]).toString());
console.log(addTwoNumbers(createList([2, 4, 5]), createList([5, 6, 4])).toString() === createList([7, 0, 0, 1]).toString());
console.log(addTwoNumbers(createList([9]), createList([9])).toString() === createList([8, 1]).toString());

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
