import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";


function numberOfSteps(num: number): number {
  let steps = 0;
  while (num > 0) {
    steps++;
    if (num % 2 === 0) {
      const result = num / 2;
      console.log(`Step ${steps}) ${num} is even; divide by 2 and obtain ${result}.`);
      num = result;
    }
    else {
      const result = num - 1;
      console.log(`Step ${steps}) ${num} is odd; subtract 1 and obtain ${result}.`);
      num = result;
    }
  }

  console.log('\n');
  return steps;
}

assertEquals(numberOfSteps(14), 6);
assertEquals(numberOfSteps(8), 4);
assertEquals(numberOfSteps(123), 12);
