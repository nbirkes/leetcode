import { assertEquals } from "jsr:@std/assert";

function containsDuplicate(nums: number[]): boolean {
  nums = nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
}

assertEquals(containsDuplicate([1, 2, 3, 4]), false);
assertEquals(containsDuplicate([1, 2, 1, 4]), true);
assertEquals(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true);
