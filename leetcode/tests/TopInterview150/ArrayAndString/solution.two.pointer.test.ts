import { isPalindrome } from "../../../src/TopInterview150/TwoPointer/125";

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
  });
});
