namespace DyProg {
  function fibo(n: number, memo: Record<number, number> = {}): number {
    if (n < 2) {
      return n;
    }

    if (!memo[n]) {
      memo[n] = fibo(n - 2, memo) + fibo(n - 1, memo);
    }
    return memo[n];
  }

  function climbStairsOne(stairs: number): number {
    if (stairs < 2) {
      return stairs;
    }

    return climbStairsOne(stairs - 1) + climbStairsOne(stairs - 2);
  }
  /**
   * Givenn an array of number representing the penalty, minimize the loss
   * @param stairs
   * @returns
   */
  function climbingStairTwo(stairs: number[]): number {
    if (stairs.length === 1) {
      return arr[0];
    }

    if(stairs.length === 2){
        return Math.min(arr[0], arr[1])
    }
    return 1;
  }
}

//3       _
//2     _|
//1   _|
//0 _|

// How many ways you can reach the top, you can use a single or a duble step forward.
// 0,1,2,3
// 0,1,3
// 0,2,3
