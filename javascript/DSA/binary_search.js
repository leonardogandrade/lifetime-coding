function binarySearch(array, target) {
    if (array.length === 1 && target === array[0]) {
        return "FOUND"
    }

    if (array.length === 1 && target !== array[0]) {
        return "NOT FOUND"
    }

    let low = 0;
    let high = array.length - 1;
    let pivot = Math.ceil(high / 2);

    if (target < array[pivot]) {
        return binarySearch(array.slice(low, high), target)
    } else {
        return binarySearch(array.slice(pivot, high), target)
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6))