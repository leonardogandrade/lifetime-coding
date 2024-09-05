function knapSack(capacity, weight, profit, index) {
    let result;

    if (index == 0 || capacity == 0)
        return 0;

    if (weight[index - 1] > capacity)
        return knapSack(capacity, weight, profit, index - 1);
    else {
        const temp1 = knapSack(capacity, weight, profit, index - 1)
        const temp2 = profit[index - 1] +
            knapSack(capacity - weight[index - 1], weight, profit, index - 1)
        result = Math.max(temp1, temp2)
    }
    return result
}

let profit = [60, 100, 120];
let weight = [10, 20, 30];
let capacity = 50; // weight capacity Kg
let n = profit.length;

console.log(knapSack(capacity, weight, profit, n));