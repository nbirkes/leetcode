import { assertEquals } from "@std/assert";

function intersection(nums1: number[], nums2: number[]): number[] {
  const seen = new Map<number, number>(Array.from(new Set(nums1)).map(it => [it, 1]));
  return Array.from(new Set(nums2)).filter(it => seen.has(it));
}

assertEquals(intersection([1,2,2,1], [2,2]), [2]);
assertEquals(intersection([4,9,5], [9,4,9,8,4]), [9,4]);
