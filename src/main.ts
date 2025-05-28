export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// if (import.meta.main) {
  // console.log("Add 2 + 3 =", add(2, 3));
// }

for (let i = 0; i < 100; i++) {
  console.log(i % 5);
}
// console.log(1 % 5);