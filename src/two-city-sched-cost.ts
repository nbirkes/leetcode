import {assertEquals} from "https://deno.land/std@0.140.0/testing/asserts.ts";

interface CostDiff {
  a: number;
  b: number;
  diff: number;
}

function twoCitySchedCost(costs: number[][]): number {
  const diffs: CostDiff[] = costs.map((it: number[]) => {
    return {
      a: it[0],
      b: it[1],
      diff: it[1] - it[0],
    };
  });

  diffs.sort((a, b) => a.diff - b.diff);

  const as = diffs.slice(costs.length / 2).map(it => it.a);
  const bs = diffs.slice(0, costs.length / 2).map(it => it.b);

  return sum([...as, ...bs]);
}

function sum(input: number[]): number {
  return input.reduce((acc: number, cur: number) => {
    return acc + cur;
  }, 0);
}

assertEquals(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]), 110);
assertEquals(twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]), 1859);
assertEquals(twoCitySchedCost([[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]]), 3086);