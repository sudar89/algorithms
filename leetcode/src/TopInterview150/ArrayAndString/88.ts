/**
 Do not return anything, modify nums1 in-place instead.
 */
function prevMerge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  const nums3 = nums1.slice(0, m);
  let i2 = 0;
  let i3 = 0;

  for (let index = 0; index < m + n; index++) {
    if (i2 >= n) {
      nums1[index] = nums3[i3++];
      continue;
    }

    if (i3 >= m) {
      nums1[index] = nums2[i2++];
      continue;
    }

    nums1[index] = nums2[i2] < nums3[i3] ? nums2[i2++] : nums3[i3++];
  }
}

export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let p1 = m - 1; // nums1의 유효 부분 마지막 인덱스
  let p2 = n - 1; // nums2의 마지막 인덱스
  let p = m + n - 1; // nums1의 전체 마지막 인덱스

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
}
