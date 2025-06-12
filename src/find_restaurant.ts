import { assertArrayIncludes } from "@std/assert";

function findRestaurant(list1: string[], list2: string[]): string[] {
  const l2 = new Map<string, number>(list2.map((it, i) => [it, i]));
  const matches = new Map<string, number>();

  for (let l1Index = 0; l1Index < list1.length; l1Index++) {
    const key = list1[l1Index];
    const l2Index = l2.get(key);
    if (l2Index !== undefined) matches.set(key, l1Index + l2Index);
  }

  const sorted = Array.from(matches.entries()).sort((a, b) => a[1] - b[1]);
  const min = sorted[0][1];
  return sorted.filter((it) => it[1] === min).map((it) => it[0]);
}

assertArrayIncludes(
  findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
  ]),
  ["Shogun"],
);
assertArrayIncludes(
  findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], [
    "KFC",
    "Shogun",
    "Burger King",
  ]),
  ["Shogun"],
);
assertArrayIncludes(
  findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]),
  ["sad", "happy"],
);
