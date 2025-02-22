export function removeDuplicates(nums: number[]): number {
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
}
