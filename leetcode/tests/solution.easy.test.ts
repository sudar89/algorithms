import { ListNode, mergeTwoLists } from "../src/easy/easy.21";
import { removeDuplicates } from "../src/easy/easy.26";
import { removeElement } from "../src/easy/easy.27";
import { hasSameDigits } from "../src/easy/easy.3461";
import { lengthOfLastWord } from "../src/easy/easy.58";
import { add } from "../src/easy/solution";

describe("leetcode easy problem", () => {
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

  describe("26. Remove Duplicates from Sorted Array", () => {
    it("returns 2 and pop duplicated nums", () => {
      let nums = [1, 1, 2];
      expect(removeDuplicates(nums)).toEqual(2);
      expect(nums.slice(0, 2)).toEqual([1, 2]);
    });
  });

  describe("27. Remove Element", () => {
    it("returns 2", () => {
      const input = [3, 2, 2, 3];
      const ret = removeElement(input, 3);
      expect(ret).toEqual(2);
      expect(input.slice(0, ret)).toEqual([2, 2]);
    });
    it("returns 5", () => {
      const input = [0, 1, 2, 2, 3, 0, 4, 2];
      const ret = removeElement(input, 2);
      expect(ret).toEqual(5);
      expect(input.slice(0, ret)).toEqual([0, 1, 3, 0, 4]);
    });
  });

  describe("58. Lenght of Last Word", () => {
    it("return 5", () => {
      expect(lengthOfLastWord("Hello World")).toEqual(5);
    });
    it("return 4", () => {
      expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
    });
    it("return 6", () => {
      expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
    });
  });

  describe("easy 3461. Check If Digits Are Equal in String After Operations ", () => {
    it("true", () => {
      expect(hasSameDigits("3902")).toBeTruthy();
    });
    it("false", () => {
      expect(hasSameDigits("34789")).toBeFalsy();
    });
  });
});
