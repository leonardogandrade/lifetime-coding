namespace TwoPointers {
  function longestSequence(string: string): number {
    const arr = string.split("");

    const longest = arr.reduce((acc: any, cur: string) => {
      if (cur in acc) {
        acc[cur]++;
      } else {
        acc[cur] = 1;
      }
      return acc;
    }, {});

    return Math.max.apply(this, Object.values(longest));
  }

  const sequence = "AAABCCCDEEEEEF";
  const result = longestSequence(sequence);
  console.log(result);
}
