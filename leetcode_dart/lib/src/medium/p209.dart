class Solution {
  int minSubArrayLen(int target, List<int> nums) {
    int n = nums.length;
    int left = 0;
    int sum = 0;
    int minLength = n + 1;

    for (int right = 0; right < n; right++) {
      sum += nums[right];

      while (sum >= target) {
        minLength =
            minLength < (right - left + 1) ? minLength : (right - left + 1);
        sum -= nums[left];
        left++;
      }
    }

    return minLength == n + 1 ? 0 : minLength;
  }
}
