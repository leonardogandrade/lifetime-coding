namespace Fibo {
  function fibonacci(target: number): number {
    if (target < 2) return 1;

    return fibonacci(target - 1) + fibonacci(target - 2);
  }

  //   const result = fibonacci(100);
  //   console.log(result);

  function fibonacciMemo(
    target: number,
    memo: Record<number, number> = {}
  ): number {
    if (target < 2) return 1;

    if (memo[target]) {
      return memo[target];
    } else {
      memo[target] =
        fibonacciMemo(target - 1, memo) + fibonacciMemo(target - 2, memo);
    }
    return memo[target];
  }
  const start = Date.now();
  const resultMemo = fibonacciMemo(5000);
  const end = Date.now();
  console.log((end - start) / 1000);
  console.log(resultMemo);
}
