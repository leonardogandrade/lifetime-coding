

// Returns the profitue of maximum profit
function knapSackRec(capacity, weight, profit, n, dp) {

    // Base condition
    if (n == 0 || capacity == 0)
        return 0;

    if (dp[n][capacity] != -1)
        return dp[n][capacity];

    if (weight[n - 1] > capacity) {
        // Store the profitue of function call
        // stack in table before return
        dp[n][capacity] = knapSackRec(capacity, weight, profit,
            n - 1, dp);
        return dp[n][capacity]
    } else {
        // Return profitue of table after storing
        const temp1 = (profit[n - 1] +
            knapSackRec(capacity - weight[n - 1], weight,
                profit, n - 1, dp))
        const temp2 = knapSackRec(capacity, weight, profit,
            n - 1, dp)
        const result = Math.max(temp1, temp2);
        dp[n][capacity] = result

    }

    return dp[n][capacity]
}

const profit = [60, 100, 120];
const weight = [10, 20, 30];

const capacity = 50;
const n = profit.length;
const dp = new Array(n + 1).fill(-1).map(el => new Array(capacity + 1).fill(-1));

console.log(knapSackRec(capacity, weight, profit, n, dp));