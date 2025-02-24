import { addTwoNumbers, ListNode } from "../src/medium/medium.2";

describe("leetcode medium problem", () => {
  describe("2. Add Two Numbers", () => {
    const createLinkedList = (arr: number[]) => {
      if (arr.length === 0) return null;

      const head = new ListNode();
      let current = head;
      for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
      }
      return head.next;
    };

    const linkedListToArray = (head: ListNode | null) => {
      const arr: number[] = [];
      while (head) {
        arr.push(head.val);
        head = head.next;
      }
      return arr;
    };

    it("returns 708", () => {
      const l1 = createLinkedList([2, 4, 3]);
      const l2 = createLinkedList([5, 6, 4]);
      const result = addTwoNumbers(l1, l2);

      expect(linkedListToArray(result)).toEqual([7, 0, 8]);
    });

    it("returns 0", () => {
      const l1 = createLinkedList([0]);
      const l2 = createLinkedList([0]);
      const result = addTwoNumbers(l1, l2);

      expect(linkedListToArray(result)).toEqual([0]);
    });

    it("returns long~", () => {
      const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
      const l2 = createLinkedList([9, 9, 9, 9]);
      const result = addTwoNumbers(l1, l2);

      expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
  });
});
