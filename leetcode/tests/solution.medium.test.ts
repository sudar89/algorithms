import { addTwoNumbers, ListNode } from "../src/medium/medium.2";
import { myAtoi } from "../src/medium/medium.8";

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

  describe("medium 8. String to Integer (atoi)", () => {
    it("should convert valid numbers", () => {
      expect(myAtoi("42")).toEqual(42);
      expect(myAtoi(" -42")).toEqual(-42);
      expect(myAtoi("1337c0d3")).toEqual(1337);
    });

    it("should return 0 for invalid cases", () => {
      expect(myAtoi("words and 987")).toEqual(0);
      expect(myAtoi("0-1")).toEqual(0);
      expect(myAtoi("+-12")).toEqual(0);
      expect(myAtoi("")).toEqual(0);
      expect(myAtoi("+")).toEqual(0);
      expect(myAtoi("-")).toEqual(0);
    });

    it("should handle leading spaces", () => {
      expect(myAtoi("    4193 with words")).toEqual(4193);
    });

    it("should handle leading zeros correctly", () => {
      expect(myAtoi("00000-42a1234")).toEqual(0);
    });

    it("should handle overflow cases", () => {
      expect(myAtoi("-91283472332")).toEqual(-2147483648);
      expect(myAtoi("2147483648")).toEqual(2147483647);
      expect(myAtoi("-2147483649")).toEqual(-2147483648);
    });
  });
});
