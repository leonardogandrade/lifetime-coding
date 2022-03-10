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

// const memoize_sum_two_numbers = memoizer(sum_two_numbers);

// console.log(memoize_sum_two_numbers(1, 2));
// console.log(memoize_sum_two_numbers(2, 2));
// console.log(memoize_sum_two_numbers(3, 2));
// console.log(memoize_sum_two_numbers(1, 2));




// Declarting that way, it is, the way we decalred sum_two_numbers function will store the result of 5!
// and not the results of 5!, 4!, 3!, 2! and 1!

// const factorial = (n) => {
//     if (n <= 1)
//         return 1;
//     return n * factorial(--n);
// }

// That way we store each factorial calculatrd and and cache it;

const factorial = memoizer(
    n => {
        if (n <= 1)
            return 1
        return n * factorial(--n)
    }
)

console.log(factorial(5));
console.log(factorial(3))
