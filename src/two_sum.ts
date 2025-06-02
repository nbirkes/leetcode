import { assertArrayIncludes } from "@std/assert";

function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (seen.has(diff)) return [i, seen.get(diff) ?? -1];
    seen.set(nums[i], i);
  }
  throw new Error("Should not get here");
}

assertArrayIncludes(twoSum([3, 3], 6), [0, 1]);
assertArrayIncludes(twoSum([2, 7, 11, 15], 9), [0, 1]);
assertArrayIncludes(twoSum([3, 2, 4], 6), [1, 2]);
assertArrayIncludes(twoSum([3, 2, 3], 6), [0, 2]);
