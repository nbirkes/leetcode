import { assertEquals } from "@std/assert";

function majorityElement(nums: number[]): number {
  const map = nums.reduce((acc: Map<number, number>, cur: number) => {
    const match = acc.get(cur) ?? 0;
    acc.set(cur, match + 1);
    return acc;
  }, new Map<number, number>());
  return Array.from(map).sort((a, b) => b[1] - a[1])[0][0];
}

Deno.test("[3,2,3]", () => assertEquals(majorityElement([3, 2, 3]), 3));
Deno.test("[6,5,5]", () => assertEquals(majorityElement([6,5,5]), 5));
Deno.test("[2,2,1,1,1,2,2]", () =>
  assertEquals(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2));
