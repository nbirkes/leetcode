interface Operator {
  label: string;
  compare: (a: number, b: number) => number;
}

const and: Operator = {
  label: 'and',
  compare: (a: number, b: number) => a & b,
};

const or: Operator = {
  label: 'or',
  compare: (a: number, b: number) => a | b,
};

const xor: Operator = {
  label: 'xor',
  compare: (a: number, b: number) => a ^ b,
};

function compareRange(operator: Operator, max: number): void {
  for (let a = 0; a <= max; a++) {
    for (let b = 0; b <= max;b ++) {
      console.log(a.toString(2), operator.label,  b.toString(2), '=', operator.compare(a, b).toString(2));
    }
  }
}

compareRange(and, 4);
compareRange(or, 4);
compareRange(xor, 4);
