from io import StringIO


class CountWords:
    """
    Given an StringIO payload like example below, count the word occurrencie in lines:

    Payload:

    Hey! How are you
    Im am good, how about you?
    I am good too.

    On the text above the occurrenie of the word "good" is TWO [2]. It appears on line 2 and 3

    """

    def __init__(self):
        self.content = None
        self.total_word = 0

    def count_words_in_lines(self, file_content: StringIO, target_word: str) -> int:
        lines = file_content.split("\n")

        for line in lines:
            if target_word in line:
                self.total_word += 1

    def read_file(self, path: str) -> None:
        with open(path, "r") as file:
            self.content = file.read()


count_words = CountWords()
count_words.read_file("input.txt")
count_words.count_words_in_lines(count_words.content, "good")
print(count_words.total_word)
