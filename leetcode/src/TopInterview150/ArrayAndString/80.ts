export function removeDuplicates(nums: number[]): number {
  let current = 1;
  for (let index = 2; index < nums.length; index++) {
    const val = nums[index];
    const prev1 = nums[current];
    const prev2 = nums[current - 1];

    if (prev1 !== val) {
      current++;
      nums[current] = val;
    } else if (prev2 !== val) {
      current++;
      nums[current] = val;
    }
  }
  return current + 1;
}
