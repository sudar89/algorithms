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
  });
});
