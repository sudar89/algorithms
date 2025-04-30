from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # for i in range(len(nums)):
        #     for j in range(i + 1, len(nums)):
        #         if nums[i] + nums[j] == target:
        #             return [i, j]

        prev = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in prev:
                return [prev[diff], i]
            prev[n] = i


def test():
    solution = Solution()
    assert solution.twoSum([3, 4, 5, 6], 7) == [0, 1]
    assert solution.twoSum([4, 5, 6], 10) == [0, 2]
    assert solution.twoSum([5, 5], 10) == [0, 1]


if __name__ == "__main__":
    test()
