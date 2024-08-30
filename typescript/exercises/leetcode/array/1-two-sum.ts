// https://leetcode.com/problems/two-sum

namespace TwoSum {
  // function targetSum(nums: number[], target: number): number[] {
  //   let pStart: number = 0;
  //   let pEnd: number = nums.length - 1;
  //   const found: boolean = false;

  //   while (!found) {
  //     if (nums[pStart] + nums[pEnd] > target) {
  //       if (nums[pEnd - 1] < nums[pEnd]) {
  //         pEnd--;
  //       } else {
  //         pStart++;
  //       }
  //     }

  //     if (nums[pStart] + nums[pEnd] < target) {
  //       pEnd++;
  //       pStart++;
  //     }

  //     if (nums[pStart] + nums[pEnd] === target) {
  //       break;
  //     }
  //   }

  //   return [pStart, pEnd];
  // }

  function targetSum(nums: number[], target: number): number[] {
    let pStart: number = 0;
    let pEnd: number = nums.length - 1;
    const found: boolean = false;

    while (!found) {
      if (nums[pStart] + nums[pEnd] === target) {
        break;
      }

      if (nums[pStart] + nums[pEnd] !== target) {
        if (nums[pEnd - 1] + nums[pStart] < nums[pStart + 1] + nums[pEnd]) {
          pEnd--;
        } else if (nums[pEnd - 1] + nums[pStart] === target) {
          pEnd--;
          break;
        } else if (nums[pStart + 1] + nums[pEnd] === target) {
          pStart++;
          break;
        } else {
          pStart++;
        }
      }
    }
    const result = [pStart, pEnd];
    return result;
  }

  function targetSum2(input: number[], target: number): number[] {
    let result = new Map();

    for (let index = 0; index < input.length; index++) {
      let difference = target - input[index];

      result.set(input[index], index);

      if (result.has(difference)) {
        return [result.get(difference), index];
      }
    }

    return [];
  }

  // const result = targetSum([4, 8, 2, 11], 12);
  const result = targetSum2([4, 11, 8, 9, 3], 12);
  // const result = targetSum2([4, 8, 15, 10], 12);
  console.log(result);
}
