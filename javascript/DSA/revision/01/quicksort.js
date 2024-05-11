function quicksort(array) {
    if (array.length < 1) {
        return array
    }

    const less = [];
    const greater = [];

    for (const item of array) {
        item < array[0] && less.push(item);
        item > array[0] && greater.push(item);
    }

    return [...quicksort(less), array[0], ...quicksort(greater)]
}
const array = [19, 13, 8, 10, 20, 2, 4, 16, 12, 7, 1, 17, 15, 11, 3, 18, 14, 9, 6, 5]
const result = quicksort(array);

console.log(result);