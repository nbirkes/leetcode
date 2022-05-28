import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";

function runTest(input: number, output: number): void {
  assertEquals(hammingWeight(input), output);
}

function hammingWeight(n: number): number {
  return n.toString(2).split('').filter(it => it === '1').length;
}

runTest(0b00000000000000000000000000001011, 3);
runTest(0b00000000000000000000000010000000, 1);
runTest(0b11111111111111111111111111111101, 31);
