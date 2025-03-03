export function removeDuplicates26(nums: number[]): number {
  let current = 0;
  for (const n of nums) {
    if (nums[current] === n) continue;
    nums[++current] = n;
  }
  return current + 1;
}
