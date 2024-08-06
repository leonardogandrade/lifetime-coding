// https://leetcode.com/problems/two-sum

namespace TwoSum {
  function _twoSum(nums: number[], target: number): number[] {
    const _nums = [...nums];
    let pStart: number = 0;
    let pEnd: number = _nums.length - 1;
    const found: boolean = false;

    while (!found) {
      if (_nums[pStart] + _nums[pEnd] > target) {
        if (_nums[pEnd - 1] < _nums[pEnd]) {
          pEnd--;
        } else {
          pStart++;
        }
      }

      if (_nums[pStart] + _nums[pEnd] < target) {
        pEnd++;
        pStart++;
      }

      if (_nums[pStart] + _nums[pEnd] === target) {
        break;
      }
    }

    return [pStart, pEnd];
  }

  function twoSum(input: number[], target: number): number[] {
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

  const result = twoSum([2, 7, 11, 15], 9);
  console.log(result);
}
