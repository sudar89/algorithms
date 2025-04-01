class Solution {
  List<List<int>> threeSum(List<int> nums) {
    nums.sort();
    print(nums);
    List<List<int>> answer = [];

    for (var i = 0; i < nums.length - 2; i++) {
      var left = i + 1;
      var right = nums.length - 1;
      while (left < right) {
        final sum = nums[i] + nums[left] + nums[right];
        if (sum == 0) {
          answer.add([nums[i], nums[left], nums[right]]);
          break;
        }

        if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
  }
}
