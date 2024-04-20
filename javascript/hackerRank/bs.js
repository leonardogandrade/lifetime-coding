const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, target) {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.round(max / 2);
    let guess;

    while (min <= max) {
        if (target < arr[mid]) {
            max = mid
            mid = Math.round((max + min) / 2)
        } else if (target > arr[mid]) {
            min = mid
            mid = Math.round((max + min) / 2)
        } else if (arr[mid] === target) {
            guess = mid;
            break;
        }
    }

    console.log(`Found at position: ${guess}`);
}

binarySearch(arr, 3);
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
