function coutdown(number) {
    console.log(number)
    if (number !== 0)
        return coutdown(number - 1);
}

// console.log(coutdown(10))

/**
 * Euclidian distance
 * Here we're aiming to find the largest land plot possible (boxes).
 * 1 - boxes must be squared
 * 2 - boxes must have same dimension
 * 3 - find largest one, not the smallest.
 */

function divideAndConquerPlots(m, n) {
    console.log(m, n)

    const minor = Math.min(m, n);

    if (m !== n) { // condition 1
        if (minor === n)
            return divideAndConquerPlots(m - n, n)
        else
            return divideAndConquerPlots(m, n - m)
    }

    return `final answer: [${[m, n]}]`
}

// console.log(divideAndConquer(1680, 640))

/**
 * sum all the elements of a given array
 * Again applying the Divide and Conquer techinique we must find out the base case
 * here the base case is when we have only one element in the array
 * [1,2,3] => 1 + sum([2,3])
 */

function divideAndConquerSumUp(array) {
    if (array.length === 0)
        return 0
    return array[0] + divideAndConquerSumUp(array.slice(1, array.length))
}

// console.log(divideAndConquerSumUp([1, 2, 3, 4, 5]))

/**
 * Find the number of elements in a given array
 */

function divideAndConquerCountElements(array) {
    if (array.length === 0)
        return 0;
    return 1 + divideAndConquerCountElements(array.slice(1, array.length));
}

// console.log(divideAndConquerCountElements([1, 2, 3, 4, 5]));

/**
 * Find the maximum number in a given array
 */
function maxNumber(array) {
    if (array.length === 0)
        return 0;
    return Math.max(array[0], maxNumber(array.slice(1, array.length)))
}

// console.log(maxNumber([1, 2, 9, 4, 12]))


function binarySearch(array, target) {
    let low = 0
    let high = array.length - 1
    let mid = Math.floor(high / 2)

    if (array.length === 1 && array[0])
        return array[0]

    if (target < array[mid])
        return binarySearch(array.slice(low, mid), target)
    else
        return binarySearch(array.slice(mid, high), target);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6))