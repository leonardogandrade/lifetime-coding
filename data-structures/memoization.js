const { fibonacciSequence } = require("../interview-code-challenges/modules");

const memoizer = fn => {
    // create a structure to cache results.
    const cache = new Map();

    // get params passed through sum_two_numbers function.
    return (...args) => {
        const key = JSON.stringify(args);

        // verify it was calculated before and reuturn the result from key
        if (cache.has(key)) {
            console.log(`${args} already cached.`);
            return cache.get(key);
            // in case of not cached yet, calculate fn using ...args, cache it and return the value
        } else {
            console.log(`${args} not cached yet, caching now.`);
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
};

const sum_two_numbers = (first, sencond) => {
    return first + sencond;
}

const factorial = memoizer(
    n => {
        if (n <= 1)
            return 1
        return n * factorial(--n)
    }
)
console.log(memoizer(sum_two_numbers(10, 20)))
console.log(memoizer(sum_two_numbers(10, 40)))
console.log(memoizer(sum_two_numbers(10, 20)))
// console.log(factorial(5));
//console.log(factorial(3))

// At this version the result is the value of a fibonnaci sequence in a certain position. FOr example:
// index:   0   1   2   3   4   5   6   ...
// values:  1   1   2   3   5   8   13  ...

// As demostrated above the fibonacci value for the 5th index is eight 8.

fibonacci = (number) => {
    let memo = [];
    let result = 0;

    if (memo[number] != null)
        return memo[number];

    if (number === 1 || number == 2)
        return 1;
    else {
        result = fibonacci(number - 1) + fibonacci(number - 2);
    }
    memo[number] = result;
    return result;
}

// console.log(fibonacci(6))

