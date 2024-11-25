# https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


def longest_substring_not_repeat(string: str) -> int:
    """
    Given a string, find out the longest substring without repeating letters and return it ant its length
    """

    current_substring = []
    longest_substring = []

    for letter in string:
        current_substring.append(letter)

        if letter not in longest_substring:
            longest_substring.append(letter)

    return (len(longest_substring), "".join(longest_substring))


string = "abcabcbb"
result = longest_substring_not_repeat(string)
print(result)
