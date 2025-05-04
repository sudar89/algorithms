class Solution:
    def isPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1

        while left < right:
            l = s[left]
            r = s[right]

            if l.isalnum() == False:
                left += 1
                continue

            if r.isalnum() == False:
                right -= 1
                continue

            if l.lower() != r.lower():
                return False
            left += 1
            right -= 1

        return True


solution = Solution()

print(solution.isPalindrome("A man, a plan, a canal: Panama"), True)
print(solution.isPalindrome("race a car"), False)
print(solution.isPalindrome(" "), True)
print(solution.isPalindrome("Was it a car or a cat I saw?"), True)
