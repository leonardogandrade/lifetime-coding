const { insert_sort } = require('./sorting_algorithms');

const array = [9, 8, 'A', 6, 5, 4, 3, 2, 1]

// try {
//     console.log(insert_sort(array));
// } catch (err) {
//     console.log(`${err}`);
// }

console.log(insert_sort(array));