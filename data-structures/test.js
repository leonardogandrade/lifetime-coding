const data = [1, 2, 3, 6, 7, 7];
function lastStoneWeight(weights) {
    // Write your code here
    let weights_sorted = weights.sort((a, b) => a - b);
    let acc = 0;
    for (let index = weights_sorted.length - 1; index >= 1; index--) {
        if (weights_sorted[index] === weights_sorted[index - 1]) {
            index = index - 2;
        } else {
            acc = Math.min(weights_sorted[index], weights_sorted[index - 1])
            console.log(weights_sorted[index], index, index - 1, acc);
        }

    }
    // if (acc === weights_sorted[0])
    //     return 0
    // else
    //     return acc;
    return Math.abs(acc - weights_sorted[0])
}

console.log(lastStoneWeight(data));