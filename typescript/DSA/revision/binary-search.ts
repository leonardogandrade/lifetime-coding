import { start } from "repl";

namespace Dsa_ {
  class Dsa {
    quickSort(arr: Array<number>): Array<number> {
      if (arr.length <= 0) {
        return [];
      }

      let pivot: number = arr[0];
      const less: number[] = [];
      const greater: number[] = [];

      for (let item of arr) {
        item < pivot && less.push(item);
        item > pivot && greater.push(item);
      }

      return [...this.quickSort(less), pivot, ...this.quickSort(greater)];
    }

    binarySearch(arr: Array<number>, target: number): string {
      if (arr.length === 1 && target === arr[0]) {
        return "found";
      }

      if (arr.length === 1 && target !== arr[0]) {
        return "NOT found";
      }

      const low = 0;
      const high = arr.length - 1;
      const pivot = Math.ceil(high / 2);

      if (target < arr[pivot]) {
        return this.binarySearch(arr.splice(low, pivot), target);
      } else {
        return this.binarySearch(arr.splice(pivot, high), target);
      }
    }
  }

  const dsa = new Dsa();
  const array = [1, 9, 2, 8, 3, 11, 7, 4, 6, 5, 10];
  const quickSortResult = dsa.quickSort(array);
  //   console.log("QuickSort: ", quickSortResult);

  const resultBinarySearch = dsa.quickSort(array);
  console.log("Binary search:", resultBinarySearch);
}
