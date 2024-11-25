class LeetCode:
    def longest_substring_not_repeated_1763_02(self, string: str) -> str:
        """
        leetcode 1763
        # https://leetcode.com/problems/longest-nice-substring/?envType=problem-list-v2&envId=sliding-window&difficulty=EASY

        Args:
            string: string sentence

        Returns:
            string: the longest string found in string input
        """

        if not string:
            return ""

        unique_letters = set(string)

        for idx, letter in enumerate(string):
            if letter.swapcase() not in unique_letters:
                left = self.longest_substring_not_repeated_1763_02(string[:idx])
                right = self.longest_substring_not_repeated_1763_02(string[idx + 1 :])

                return max(left, right, key=len)

        return string

    def longest_nice_substring(self, s: str) -> str:
        def good(start, end):
            t = set(s[start:end])

            for x in t:
                if (x.lower() in t) != (x.upper() in t):
                    return False
            return True

        N = len(s)
        best = ""

        for start in range(N):
            for end in range(start + 1, N + 1):
                if good(start, end) and end - start > len(best):
                    best = s[start:end]

        return best

    def house_robber(self, houses: list) -> int:
        """
        Leetcode 198 - https://leetcode.com/problems/house-robber/description/
        Here is an algorithm to maximize the robber's profit.

        Args:
        @houses: list of valu for each house

        Constraints:
        It's not allowed to robber adjacency houses

        Time complexity: O(n)
        Space complety: O(1)

        """
        if len(houses) == 1:
            return houses[0]

        if len(houses) == 2:
            return max(houses)

        prev = houses[0]
        curr = houses[1]

        for i in range(2, len(houses)):
            prev, curr = curr, max(houses[i] + prev, curr)

        return curr

    def removeDuplicates(self, nums: list[int]) -> int:
        """_summary_

        Args:
            nums (list[int]): list of numbers repeated or not in ascending order

        Returns:
            int: number of distict elements

        Time complexity: O(n)
        Space complexity: O(1)
        """
        n = len(nums)
        j = 1
        i = 1

        while i < n:

            if nums[i] != nums[i-1]:
                nums[j] = nums[i]
                j += 1

            i += 1
        
        return j
