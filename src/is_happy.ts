import { assertEquals } from "@std/assert";

function isHappy(n: number): boolean {
  const getNext = (num: number) => {
    const digits = num.toString().split("").map((it) => Number(it));
    return digits.reduce((prev: number, cur: number) => {
      return Math.pow(cur, 2) + prev;
    }, 0);
  };

  let slowRunner = n;
  let fastRunner = getNext(n);
  while (fastRunner != 1 && slowRunner != fastRunner) {
    slowRunner = getNext(slowRunner);
    fastRunner = getNext(getNext(fastRunner));
  }
  return fastRunner == 1;
}

assertEquals(isHappy(7), true);
assertEquals(isHappy(19), true);
assertEquals(isHappy(2), false);
