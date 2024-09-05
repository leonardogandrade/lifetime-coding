class Dsa {
  /**
   * Binary Search
   * @param arr
   * @param target
   * @param steps
   * @returns
   */
  static binarySeach(
    arr: Array<number>,
    target: number,
    steps: number = 0
  ): string {
    if (arr.length === 1 && target === arr[0]) {
      return `FOUND in: ${steps} steps`;
    }

    if (arr.length === 1 && target !== arr[0]) {
      return `NOT FOUND after: ${steps} steps`;
    }

    const pivot: number = Math.ceil(arr.length / 2);
    const start: number = 0;
    const end: number = arr.length - 1;

    steps += 1;
    if (target < arr[pivot]) {
      return this.binarySeach(arr.splice(start, pivot), target, steps);
    } else {
      return this.binarySeach(arr.splice(pivot, end), target, steps);
    }
  }
  /**
   * Quick Sort - Sorting algorithm
   * @param arr
   * @returns
   */
  static quickSort(arr: Array<number>): Array<number> {
    if (arr.length === 0) {
      return [];
    }

    const pivot = arr[0];
    let less: number[] = [];
    let greater: number[] = [];

    for (let item of arr) {
      item < pivot && less.push(item);
      item > pivot && greater.push(item);
    }

    return [...this.quickSort(less), pivot, ...this.quickSort(greater)];
  }
}

const size = 1000000;

let arr: Array<number> = Array.from({ length: size }, () =>
  Math.ceil(Math.random() * size)
);

arr = Dsa.quickSort(arr);

const targetValue: number = Math.ceil(Math.random() * 100);
console.log(arr[targetValue]);

const result = Dsa.binarySeach(arr, targetValue);
console.log(result);
