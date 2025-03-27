import { isPalindrome } from "../../../src/TopInterview150/TwoPointer/125";
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
  });
});
