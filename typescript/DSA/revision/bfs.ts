namespace Dyn {
  function robberHouse(arr: number[]) {
    if (arr.length === 1) {
      return arr[0];
    }

    if (arr.length === 0) {
      return 0;
    }

    const dp = [arr[0], Math.max(arr[0], arr[1])];

    for (let n = 2; n < arr.length; n++) {
      dp[n] = Math.max(dp[n - 2] + arr[n], dp[n - 1]);
    }

    return dp[arr.length - 1];
  }

  const array = [1, 2, 3, 1];
  const result = robberHouse(array);
  console.log(result);
}
