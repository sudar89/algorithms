function prevCanJump(nums: number[]): boolean {
  // const list = nums.map(() => false);
  const list = new Array(nums.length).fill(false);
  list[0] = true;

  for (let i = 0; i < nums.length; i++) {
    if (!list[i]) continue;
    let index = i;
    while (index < nums.length && index <= i + nums[i]) {
      list[index++] = true;
    }
  }

  return list[nums.length - 1];
}

export function canJump(nums: number[]): boolean {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) return true;
  }
  return false;
}
