import 'dart:math';

class Solution {
  int maxArea(List<int> height) {
    int left = 0, right = height.length - 1, answer = 0;

    while (left < right) {
      int count = right - left;
      int water = count * min(height[left], height[right]);

      answer = max(water, answer);
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }

    return answer;
  }
}
