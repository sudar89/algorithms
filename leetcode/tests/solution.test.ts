import { ListNode, mergeTwoLists } from "../src/easy/easy.21";
import { add } from "../src/easy/solution";

describe("leetcode easy problem", () => {
  test("add function works correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  describe("21. Merge two sorted lists", () => {
    function createLinkedList(arr: number[]): ListNode | null {
      if (arr.length === 0) return null;

      let head = new ListNode(arr[0]);
      let current = head;
      for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
      }
      return head.next;
    }
    function linkedListToArray(head: ListNode | null): number[] {
      let arr: number[] = [];
      while (head) {
        arr.push(head.val);
        head = head.next;
      }
      return arr;
    }

    test("Merge two lists.", () => {
      const list1 = createLinkedList([1, 2, 4]);
      const list2 = createLinkedList([1, 3, 4]);
      const mergedList = mergeTwoLists(list1, list2);
      console.log(linkedListToArray(mergedList));

      expect(linkedListToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
    });

    test("Merge two empty lists.", () => {
      const list1 = createLinkedList([]);
      const list2 = createLinkedList([]);
      const mergedList = mergeTwoLists(list1, list2);
      expect(linkedListToArray(mergedList)).toEqual([]);
    });

    test("Merge one empty list and one list.", () => {
      const list1 = createLinkedList([]);
      const list2 = createLinkedList([0]);
      const mergedList = mergeTwoLists(list1, list2);
      expect(linkedListToArray(mergedList)).toEqual([0]);
    });
  });
});
