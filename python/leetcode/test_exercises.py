from leetcode.exercises import LeetCode

leetcode = LeetCode()


class Test_longest_substring_1763_01:
    def test_empty_payload(self):
        payload = ""
        assert leetcode.longest_nice_substring(payload) == ""

    def test_only_one_longest_substring(self):
        payload = "YazaAay"
        assert leetcode.longest_nice_substring(payload) == "aAa"

    def test_two_substrings_same_size(self):
        payload = "yYyzaAab"
        assert leetcode.longest_nice_substring(payload) == "yYy"


class Test_longest_substring_1763_02:
    def test_empty_payload(self):
        payload = ""
        assert leetcode.longest_substring_not_repeated_1763_02(payload) == ""

    def test_only_one_longest_substring(self):
        payload = "YazaAay"
        assert leetcode.longest_substring_not_repeated_1763_02(payload) == "aAa"

    def test_two_substrings_same_size(self):
        payload = "yYyzaAab"
        assert leetcode.longest_substring_not_repeated_1763_02(payload) == "yYy"

class Test_remove_duplicates:
    def test_four_distinct_elements(self):
        arr = [0,0,1,1,1,2,2,3,3,4]
        assert leetcode.removeDuplicates(arr) == 4

    def test_two_distinct_elements(self):
        arr = [1,1,2]
        assert leetcode.removeDuplicates(arr) == 2
