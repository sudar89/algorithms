class Solution:
    # def isAnagram(self, s: str, t: str) -> bool:
    #     n = {}
    #     m = {}
    #     for c in s:
    #         n[c] = n.get(c, 0) + 1
    #     for c in t:
    #         m[c] = m.get(c, 0) + 1

    #     return n == m
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = [0 for i in range(26)]

        for i in range(len(s)):
            count[ord(s[i]) - ord("a")] += 1
            count[ord(t[i]) - ord("a")] -= 1

        for i in range(26):
            if count[i] != 0:
                return False

        return True


def test_is_anagram():
    solution = Solution()
    assert solution.isAnagram("anagram", "nagaram") == True
    assert solution.isAnagram("rat", "car") == False


if __name__ == "__main__":
    test_is_anagram()
    print("All tests passed!")
