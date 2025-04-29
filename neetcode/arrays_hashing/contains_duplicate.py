from typing import List


class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums_set = set(nums)
        return len(nums_set) != len(nums)


def test_has_duplicate():
    solution = Solution()
    nums = [1, 2, 3, 4]
    assert solution.hasDuplicate(nums) == False

    nums = [1, 2, 3, 1]
    assert solution.hasDuplicate(nums) == True

    nums = []
    assert solution.hasDuplicate(nums) == False

    nums = [0]
    assert solution.hasDuplicate(nums) == False

    nums = [2, 2, 2, 2, 2]
    assert solution.hasDuplicate(nums) == True


if __name__ == "__main__":
    test_has_duplicate()
    print("All tests passed!")
