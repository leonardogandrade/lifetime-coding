namespace QuickSort {
  function sumCoins(coins: Array<number>, n: number, sum: number): number {
    if (sum === 0) {
      return 1;
    }

    if (sum < 0) {
      return 0;
    }

    if (n <= 0) {
      return 0;
    }

    return (
      sumCoins(coins, n - 1, sum) + sumCoins(coins, n - 1, sum - coins[n - 1])
    );
  }
  const coins = [10, 15, 25];
  const sum = 25;

  const result = sumCoins(coins, 3, sum);
  console.log(result);
}
