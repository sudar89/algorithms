export function removeElement(nums: number[], val: number): number {
  let answer = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === val) {
      answer++;
    } else {
      nums[index - answer] = nums[index];
    }
  }
  return nums.length - answer;
}
