import { maxProfit } from "../../../src/TopInterview150/ArrayAndString/121";
import { romanToInt } from "../../../src/TopInterview150/ArrayAndString/13";
import { rotate } from "../../../src/TopInterview150/ArrayAndString/189";
import { removeDuplicates26 } from "../../../src/TopInterview150/ArrayAndString/26";
import { removeElement } from "../../../src/TopInterview150/ArrayAndString/27";
import { removeDuplicates } from "../../../src/TopInterview150/ArrayAndString/80";
import { merge } from "../../../src/TopInterview150/ArrayAndString/88";

describe("Top Interview 150", () => {
  describe("Array and String", () => {
    describe("easy 88. merge Sorted Array", () => {
      it("merge two array", () => {
        const nums1: number[] = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2: number[] = [2, 5, 6];
        const n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
      });

      it("should be not changed. when n is 0", () => {
        const nums1: number[] = [1];
        const m = 1;
        const nums2: number[] = [];
        const n = 0;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
      });

      it("should be equal to nums2. when m is 0", () => {
        const nums1: number[] = [0];
        const m = 0;
        const nums2: number[] = [1];
        const n = 1;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
      });
    });

    describe("medium 121. Best Time to Buy and Sell Stock", () => {
      it("should return 5 when the optimal buy and sell yields a profit of 5", () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
      });
      it("should return 0 when no profit can be made", () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
      });
    });

    describe("Easy 13: Roman to Integer", () => {
      it("should return 3 for input 'III'", () => {
        expect(romanToInt("III")).toEqual(3);
      });

      it("should return 58 for input 'LVIII'", () => {
        expect(romanToInt("LVIII")).toEqual(58);
      });

      it("should return 1994 for input 'MCMXCIV'", () => {
        expect(romanToInt("MCMXCIV")).toEqual(1994);
      });
    });
    describe("Medium 80: Remove Duplicates from Sorted Array II", () => {
      it("removes duplicates allowing at most twice per element", () => {
        const input = [1, 1, 1, 2, 2, 3];
        const result = removeDuplicates(input);
        expect(result).toEqual(5);
        expect(input.slice(0, result)).toEqual([1, 1, 2, 2, 3]);
      });

      it("removes duplicates from a larger input", () => {
        const input = [0, 0, 1, 1, 1, 1, 2, 3, 3];
        const result = removeDuplicates(input);
        expect(result).toEqual(7);
        expect(input.slice(0, result)).toEqual([0, 0, 1, 1, 2, 3, 3]);
      });

      it("handles an already unique array", () => {
        const input = [1, 2, 3, 4, 5];
        const result = removeDuplicates(input);
        expect(result).toEqual(5);
        expect(input.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
      });

      it("handles an array with all elements the same", () => {
        const input = [1, 1, 1, 1, 1, 1, 1];
        const result = removeDuplicates(input);
        expect(result).toEqual(2);
        expect(input.slice(0, result)).toEqual([1, 1]);
      });
    });

    describe("Easy 27: Remove Element", () => {
      it("removes all instances of 3", () => {
        const input = [3, 2, 2, 3];
        const result = removeElement(input, 3);
        expect(result).toEqual(2);
        expect(input.slice(0, result).sort()).toEqual([2, 2]);
      });

      it("removes all instances of 2", () => {
        const input = [0, 1, 2, 2, 3, 0, 4, 2];
        const result = removeElement(input, 2);
        expect(result).toEqual(5);
        expect(input.slice(0, result).sort()).toEqual([0, 0, 1, 3, 4]);
      });

      it("handles an array with no occurrences", () => {
        const input = [1, 3, 5, 7];
        const result = removeElement(input, 2);
        expect(result).toEqual(4);
        expect(input.slice(0, result)).toEqual([1, 3, 5, 7]);
      });

      it("handles an empty array", () => {
        const input: number[] = [];
        const result = removeElement(input, 1);
        expect(result).toEqual(0);
        expect(input).toEqual([]);
      });
    });

    describe("Easy 26: Remove Duplicates from Sorted Array", () => {
      it("removes duplicates from a short sorted array", () => {
        const input = [1, 1, 2];
        const ret = removeDuplicates26(input);
        expect(ret).toEqual(2);
        expect(input.slice(0, ret)).toEqual([1, 2]);
      });

      it("removes duplicates from a longer sorted array", () => {
        const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const ret = removeDuplicates26(input);
        expect(ret).toEqual(5);
        expect(input.slice(0, ret)).toEqual([0, 1, 2, 3, 4]);
      });

      it("handles an already unique array", () => {
        const input = [1, 2, 3, 4, 5];
        const ret = removeDuplicates26(input);
        expect(ret).toEqual(5);
        expect(input.slice(0, ret)).toEqual([1, 2, 3, 4, 5]);
      });

      it("handles an array with all duplicates", () => {
        const input = [2, 2, 2, 2, 2];
        const ret = removeDuplicates26(input);
        expect(ret).toEqual(1);
        expect(input.slice(0, ret)).toEqual([2]);
      });
    });

    describe("Medium 189: Rotate Array", () => {
      it("rotates an array of length 7 by 3 positions", () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);
        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
      });

      it("rotates an array of length 4 by 2 positions", () => {
        const nums = [-1, -100, 3, 99];
        rotate(nums, 2);
        expect(nums).toEqual([3, 99, -1, -100]);
      });

      it("handles k larger than array length", () => {
        const nums = [1, 2, 3, 4, 5];
        rotate(nums, 7); // k = 7 → 실제로는 k % 5 = 2만큼 회전
        expect(nums).toEqual([4, 5, 1, 2, 3]);
      });

      it("handles k as a multiple of array length (no change)", () => {
        const nums = [1, 2, 3, 4, 5, 6];
        rotate(nums, 6); // k = 6 → 배열 크기와 같으므로 변화 없음
        expect(nums).toEqual([1, 2, 3, 4, 5, 6]);
      });

      it("handles an array of length 1 (no change)", () => {
        const nums = [10];
        rotate(nums, 3); // k가 커도 길이가 1이면 그대로
        expect(nums).toEqual([10]);
      });
    });
  });
});
