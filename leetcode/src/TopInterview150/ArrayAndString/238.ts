export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = left;
    left *= nums[i]; // 왼쪽 누적 곱 계산
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i]; // 오른쪽 누적 곱 계산
  }

  return answer.map((val) => (Object.is(val, -0) ? 0 : val));
}
