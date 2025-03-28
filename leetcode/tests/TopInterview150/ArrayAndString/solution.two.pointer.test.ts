import { isPalindrome } from "../../../src/TopInterview150/TwoPointer/125";
import { twoSum } from "../../../src/TopInterview150/TwoPointer/167";
import { isSubsequence } from "../../../src/TopInterview150/TwoPointer/392";

describe("Top Interview 150", () => {
  describe("Two Pointers", () => {
    describe("Easy 125: Valid Palindrome", () => {
      it("simple palindrome", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
      });

      it("not a palindrome", () => {
        expect(isPalindrome("race a car")).toBe(false);
      });

      it("empty string", () => {
        expect(isPalindrome("")).toBe(true);
      });

      it("numbers and letters", () => {
        expect(isPalindrome("0P")).toBe(false);
      });
    });

    describe("Easy 392: Is Subsequence", () => {
      it("returns true when s is a subsequence of t", () => {
        expect(isSubsequence("abc", "ahbgdc")).toBe(true);
      });

      it("returns false when s is not a subsequence of t", () => {
        expect(isSubsequence("axc", "ahbgdc")).toBe(false);
      });
    });

    describe("Medium 167: Two Sum II", () => {
      it("should return [1, 2] for [2, 7, 11, 15] and target 9", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
      });

      it("should return [1, 2] for [-1, 0] and target -1", () => {
        expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
      });

      it("should return [1, 3] for [2, 3, 4] and target 6", () => {
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
      });
    });
  });
});
