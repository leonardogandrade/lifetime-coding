export namespace DynProg {
  export class Dp {
    climbingStair(cost: Array<number>) {
      if (cost.length === 1) {
        return cost[0];
      }

      if (cost.length === 2) {
        return Math.min(cost[0], cost[1]);
      }

      cost.push(0);

      for (let n: number = cost.length - 3; n > -1; n--) {
        cost[n] += Math.min(cost[n + 1], cost[n + 2]);
      }

      return Math.min.apply(this, cost.splice(0, 2));
    }
    climbingStairs2(n: number): number {
      if (n <= 1) {
        return n;
      }

      return this.climbingStairs2(n - 1) + this.climbingStairs2(n - 2);
    }
    /**
     * Fibonnaci sequence - For a given array position, find the respective fibonnaci number
     * ex: for 5 -> 8
     * indexes        0 1 2 3 4 5 6  7  8  9
     * Fibo sequence [1 1 2 3 5 8 13 21 34 55 ]
     */
    fibonnacci(pos: number, memo: Record<number, number> = {}): number {
      if (pos < 2) return 1;

      if (memo[pos]) {
        return memo[pos];
      } else {
        memo[pos] =
          this.fibonnacci(pos - 1, memo) + this.fibonnacci(pos - 2, memo);
      }
      return memo[pos];
    }
    /**
     * For a given array of coins, find whats is the possible sums
     * Is allowed to repeat coins
     * @param coins
     * @returns
     */
    coinsSumPossibilities(
      coins: Array<number>,
      n: number,
      sum: number
    ): number {
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
        this.coinsSumPossibilities(coins, n - 1, sum) +
        this.coinsSumPossibilities(coins, n, sum - coins[n - 1])
      );
    }
    /**
     * Knapsack 0|1 problem
     * @param {number} capacity capacity in kg of knapsack
     * @param {number} n position in the array
     */

    knapsackBin(
      n: number,
      weight: Array<number>,
      profit: Array<number>,
      capacity: number
    ): number {
      let result;

      if (n === 0 || capacity === 0) {
        return 0;
      }

      if (weight[n] > capacity) {
        return this.knapsackBin(n - 1, weight, profit, capacity);
      } else {
        const temp1 = this.knapsackBin(n - 1, weight, profit, capacity);
        const temp2 =
          this.knapsackBin(n - 1, weight, profit, capacity - weight[n - 1]) +
          profit[n];
        result = Math.max(temp1, temp2);
      }

      // if (memo[n][capacity] !== undefined) {
      //   memo[n][capacity] = result!;
      // }

      return result;
    }

    knapsackMemo(
      profit: Array<number>,
      weight: Array<number>,
      capacity: number,
      n: number
    ): number {
      let result;

      if (n === 0 || capacity === 0) {
        return 0;
      }

      if (weight[n] > capacity) {
        return this.knapsackMemo(profit, weight, capacity, n - 1);
      } else {
        const temp1 = this.knapsackMemo(profit, weight, capacity, n - 1);
        const temp2 =
          this.knapsackMemo(profit, weight, capacity - weight[n - 1], n - 1) +
          profit[n];
        result = Math.max(temp1, temp2);
      }

      // if (memo[n][capacity] !== undefined) {
      //   memo[n][capacity] = result!;
      // }

      return result!;
    }
  }
}

const dp = new DynProg.Dp();
let arr_: number[];

// 1 - Climbing Stairs - Find the minor cost.
// You can start from 0 or 1 array position and can do a single or a double jump each movement

arr_ = [10, 15, 20];
// console.log(dp.climbingStair(arr_));

// 2 - Fibonnaci
// const start = new Date().getTime();
// console.log(dp.fibonnacci(40));
// const end = new Date().getTime();
// console.log("Total time: ", end - start);

// 3 - Coins
// arr_ = [2, 5, 3, 6];
// console.log(dp.coinsSumPossibilities(arr_, arr_.length, 10));

// 4 - Knapsack

const profit = [60, 100, 120];
const weight = [10, 20, 30];
const capacity = 50; // weight capacity Kg
const n = profit.length - 1;
const size = n + 1;

// console.log(dp.knapsackMemo(profit, weight, capacity, n));

// 5 - climbingStairs2 - In how many different ways we can climb a stair of a certain number of stairs

const stairs = 3;
console.log(dp.climbingStairs2(stairs + 1));
