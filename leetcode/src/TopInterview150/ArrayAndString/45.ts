function jumpDP(nums: number[]): number {
  const dp = new Array(nums.length).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = 1; j <= num && i + j < nums.length; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
    console.log(dp);
  }

  return dp[nums.length - 1];
}

export function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }
  return jumps;
}
