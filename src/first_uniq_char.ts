import { assertEquals } from "@std/assert";

function firstUniqChar(s: string): number {
  const occurences = s.split("").reduce(
    (acc: Map<string, number>, cur: string) => {
      const match = acc.get(cur);
      if (match !== undefined) acc.set(cur, match + 1);
      else acc.set(cur, 1);
      return acc;
    },
    new Map<string, number>(),
  );

  const firstUnique = Array.from(occurences).find((it) => it[1] === 1);
  if (firstUnique === undefined) return -1;
  return s.indexOf(firstUnique[0]);
}

Deno.test("leetcode", () => assertEquals(firstUniqChar("leetcode"), 0));
Deno.test("loveleetcode", () => assertEquals(firstUniqChar("loveleetcode"), 2));
Deno.test("aabb", () => assertEquals(firstUniqChar("aabb"), -1));
