function quicksort(array) {
    if (array.length <= 1) {
        return array
    }

    let less = [];
    let greater = [];
    let pivot = array[0];

    for (let item of array) {
        item < pivot && less.push(item)
        item > pivot && greater.push(item)
    }

    return [...quicksort(less), pivot, ...quicksort(greater)];
}

const array = [19, 13, 8, 10, 20, 2, 4, 16, 12, 7, 1, 17, 15, 11, 3, 18, 14, 9, 6, 5]
const result = quicksort(array)
console.log(result)