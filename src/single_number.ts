import { assertEquals } from "@std/assert";

function singleNumber(nums: number[]): number {
  let a = 0;
  for (let i of nums) {
    console.log(a.toString(2), i.toString(2));
    // console.log(a.toString(2));
    a = a ^ i;
  }
  return a;
}

assertEquals(singleNumber([2, 2, 1]), 1);
// assertEquals(singleNumber([4, 1, 2, 1, 2]), 4);
// assertEquals(singleNumber([1]), 1);
