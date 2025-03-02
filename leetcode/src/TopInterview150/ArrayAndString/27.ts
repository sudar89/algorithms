export function removeElement(nums: number[], val: number): number {
  let right = nums.length - 1;
  let index = 0;

  while (index <= right) {
    if (nums[index] === val) {
      nums[index] = nums[right]; // `right`의 값을 `index`에 덮어쓰기
      right--; // right를 줄여 제거한 효과
    } else {
      index++; // val이 아닐 때만 index 증가
    }
  }

  return right + 1; // 유효한 길이 반환
}
