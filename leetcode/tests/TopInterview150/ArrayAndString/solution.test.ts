import { intToRoman } from "../../../src/TopInterview150/ArrayAndString/12";
import { maxProfit } from "../../../src/TopInterview150/ArrayAndString/121";
import { maxProfit2 } from "../../../src/TopInterview150/ArrayAndString/122";
import { romanToInt } from "../../../src/TopInterview150/ArrayAndString/13";
import { canCompleteCircuit } from "../../../src/TopInterview150/ArrayAndString/134";
import { candy } from "../../../src/TopInterview150/ArrayAndString/135";
import { longestCommonPrefix } from "../../../src/TopInterview150/ArrayAndString/14";
import { reverseWords } from "../../../src/TopInterview150/ArrayAndString/151";
import { majorityElement } from "../../../src/TopInterview150/ArrayAndString/169";
import { rotate } from "../../../src/TopInterview150/ArrayAndString/189";
import { productExceptSelf } from "../../../src/TopInterview150/ArrayAndString/238";
import { removeDuplicates26 } from "../../../src/TopInterview150/ArrayAndString/26";
import { removeElement } from "../../../src/TopInterview150/ArrayAndString/27";
import { hIndex } from "../../../src/TopInterview150/ArrayAndString/274";
import { strStr } from "../../../src/TopInterview150/ArrayAndString/28";
import { RandomizedSet } from "../../../src/TopInterview150/ArrayAndString/380";
import { trap } from "../../../src/TopInterview150/ArrayAndString/42";
import { jump } from "../../../src/TopInterview150/ArrayAndString/45";
import { canJump } from "../../../src/TopInterview150/ArrayAndString/55";
import { lengthOfLastWord } from "../../../src/TopInterview150/ArrayAndString/58";
import { convert } from "../../../src/TopInterview150/ArrayAndString/6";
import { fullJustify } from "../../../src/TopInterview150/ArrayAndString/68";
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

    describe("Easy 169: Majority Element", () => {
      it("should return 3", () => {
        expect(majorityElement([3, 2, 3])).toEqual(3);
      });
      it("should return 2", () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
      });
    });

    describe("Medium 122: Best Time to Buy and Sell Stock II", () => {
      it("", () => {
        expect(maxProfit2([7, 1, 5, 3, 6, 4])).toEqual(7);
      });
      it("", () => {
        expect(maxProfit2([1, 2, 3, 4, 5])).toEqual(4);
      });
      it("", () => {
        expect(maxProfit2([7, 6, 4, 3, 1])).toEqual(0);
      });
    });

    describe("Medium 55: Jump Game", () => {
      it("returns true for reachable last index", () => {
        expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
      });

      it("returns false for unreachable last index", () => {
        expect(canJump([3, 2, 1, 0, 4])).toEqual(false);
      });

      it("returns true for single element array", () => {
        expect(canJump([0])).toEqual(true);
      });

      it("returns true when all elements are large", () => {
        expect(canJump([10, 10, 10, 10, 10])).toEqual(true);
      });

      it("returns false for early stopping case", () => {
        expect(canJump([1, 0, 0, 0])).toEqual(false);
      });
    });
    describe("Medium 45: Jump Game II", () => {
      it("returns minimum jumps to reach the last index", () => {
        expect(jump([2, 3, 1, 1, 4])).toEqual(2);
      });

      it("handles arrays with only one element", () => {
        expect(jump([0])).toEqual(0);
      });

      it("handles already sorted jumps", () => {
        expect(jump([1, 2, 3, 4, 5])).toEqual(3);
      });

      it("handles early stopping", () => {
        expect(jump([2, 3, 0, 1, 4])).toEqual(2);
      });
    });

    describe("Medium 274: H-Index", () => {
      it("returns the correct H-Index for a standard case", () => {
        expect(hIndex([3, 0, 6, 1, 5])).toEqual(3);
      });

      it("returns the correct H-Index when values are small", () => {
        expect(hIndex([1, 3, 1])).toEqual(1);
      });

      it("returns the correct H-Index when all values are high", () => {
        expect(hIndex([10, 8, 5, 4, 3])).toEqual(4);
      });

      it("returns 0 when all citations are 0", () => {
        expect(hIndex([0, 0, 0, 0])).toEqual(0);
      });

      it("returns 1 when there is only one highly cited paper", () => {
        expect(hIndex([100])).toEqual(1);
      });
    });

    describe("Medium 380: Insert Delete GetRandom O(1)", () => {
      it("", () => {
        const set = new RandomizedSet();

        expect(set.insert(1)).toBeTruthy();
        expect(set.remove(2)).toBeFalsy();
        expect(set.insert(2)).toBeTruthy();
        set.getRandom();
        expect(set.remove(1)).toBeTruthy();
        expect(set.insert(2)).toBeFalsy();
        set.getRandom();
        //
      });
    });

    describe("Medium 238: Product of Array Except Self", () => {
      it("calculates the product of array except self for positive numbers", () => {
        expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
      });

      it("handles arrays containing zero", () => {
        expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
      });

      it("handles multiple zeros in the array", () => {
        expect(productExceptSelf([0, 0, 2, 3])).toEqual([0, 0, 0, 0]);
      });

      it("handles arrays with a single zero", () => {
        expect(productExceptSelf([4, 0, 5])).toEqual([0, 20, 0]);
      });

      it("handles all elements being zero", () => {
        expect(productExceptSelf([0, 0, 0])).toEqual([0, 0, 0]);
      });

      it("handles negative numbers correctly", () => {
        expect(productExceptSelf([-1, -2, -3, -4])).toEqual([-24, -12, -8, -6]);
      });

      it("handles a single element (edge case)", () => {
        expect(productExceptSelf([42])).toEqual([1]); // 아무 요소도 제외할 수 없으므로 1이 나와야 함
      });

      it("handles two elements", () => {
        expect(productExceptSelf([3, 5])).toEqual([5, 3]);
      });

      it("handles negative numbers with zero", () => {
        expect(productExceptSelf([-1, 0, -2, -3])).toEqual([0, -6, 0, 0]);
      });
    });
    describe("Medium 134: Gas Station", () => {
      it("has solution", () => {
        expect(canCompleteCircuit([1, 2, 3, 4, 6], [3, 4, 5, 1, 2])).toEqual(3);
      });

      it("has no solution", () => {
        expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toEqual(-1);
      });
    });

    describe("Medium 135: Candy", () => {
      it("handles increasing and decreasing ratings", () => {
        expect(candy([1, 0, 2])).toEqual(5); // 2-1-2
        expect(candy([1, 2, 2])).toEqual(4); // 1-2-1
      });

      it("handles all same ratings", () => {
        expect(candy([3, 3, 3, 3])).toEqual(4); // 1-1-1-1 (모두 같은 값)
      });

      it("handles strictly increasing ratings", () => {
        expect(candy([1, 2, 3, 4, 5])).toEqual(15); // 1-2-3-4-5
      });

      it("handles strictly decreasing ratings", () => {
        expect(candy([5, 4, 3, 2, 1])).toEqual(15); // 5-4-3-2-1
      });

      it("handles single child", () => {
        expect(candy([4])).toEqual(1); // 단일 요소는 항상 1
      });

      it("handles two children with different ratings", () => {
        expect(candy([1, 2])).toEqual(3); // 1-2
        expect(candy([2, 1])).toEqual(3); // 2-1
      });

      it("handles peaks and valleys", () => {
        expect(candy([1, 6, 2, 5, 3, 4])).toEqual(9); // 1-2-1-2-1-2
      });
    });

    describe("Hard 42: Trapping Rain Water", () => {
      it("", () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
        expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9);
      });
    });

    describe("Medium 12: Interger to Roman", () => {
      it("converts numbers correctly", () => {
        expect(intToRoman(3)).toEqual("III");
        expect(intToRoman(58)).toEqual("LVIII");
        expect(intToRoman(1994)).toEqual("MCMXCIV");
      });
    });

    describe("Easy 58: Length of Last Word", () => {
      it("has no space on the end", () => {
        expect(lengthOfLastWord("Hello World")).toEqual(5);
        expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
      });

      it("has space on the end", () => {
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
      });
    });

    describe("Medium 151: Reverse Words in String", () => {
      it("has 4 spaces and words.", () => {
        expect(reverseWords("the sky is blue")).toEqual("blue is sky the");
      });
      it("has multiple spaces.", () => {
        expect(reverseWords("  hello world  ")).toEqual("world hello");
        expect(reverseWords("a good   example")).toEqual("example good a");
      });
    });

    describe("Easy 14: Longest Common Prefix", () => {
      it("has common prefix", () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
      });

      it("has no common prefix", () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
      });
      it("has one string.", () => {
        expect(longestCommonPrefix(["a"])).toEqual("a");
      });
      it("has one string.", () => {
        expect(longestCommonPrefix(["ab", "a"])).toEqual("a");
      });
    });

    describe("Medium 6: Zigzag Conversion", () => {
      it("returns correct zigzag conversion for 3 rows", () => {
        expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
      });

      it("returns correct zigzag conversion for 4 rows", () => {
        expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
      });

      it("returns input if numRows is 1", () => {
        expect(convert("ABCD", 1)).toBe("ABCD");
      });
    });

    describe("Easy 28: Find the Index of the First Occurrence in a String", () => {
      it("returns 0 when needle is at the start", () => {
        expect(strStr("sadbutsad", "sad")).toBe(0);
      });

      it("returns -1 when needle is not present", () => {
        expect(strStr("leetcode", "leeto")).toBe(-1);
      });

      it("returns index when needle appears in the middle", () => {
        expect(strStr("hello", "ll")).toBe(2);
      });

      it("returns 0 for empty needle", () => {
        expect(strStr("abc", "")).toBe(0);
      });
    });

    describe("Hard 68: Text Justification", () => {
      it("", () => {
        expect(
          fullJustify(
            ["This", "is", "an", "example", "of", "text", "justification."],
            16,
          ),
        ).toEqual(["This    is    an", "example  of text", "justification.  "]);
      });

      it("", () => {
        expect(
          fullJustify(
            ["What", "must", "be", "acknowledgment", "shall", "be"],
            16,
          ),
        ).toEqual(["What   must   be", "acknowledgment  ", "shall be        "]);
      });

      it("", () => {
        expect(
          fullJustify(
            [
              "Science",
              "is",
              "what",
              "we",
              "understand",
              "well",
              "enough",
              "to",
              "explain",
              "to",
              "a",
              "computer.",
              "Art",
              "is",
              "everything",
              "else",
              "we",
              "do",
            ],
            20,
          ),
        ).toEqual([
          "Science  is  what we",
          "understand      well",
          "enough to explain to",
          "a  computer.  Art is",
          "everything  else  we",
          "do                  ",
        ]);
      });
    });
  });
});
