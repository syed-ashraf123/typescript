function add(n1: number, n2: number): number {
  const result = n1 + n2;
  return result;
}

function add2(n1: number, n2: number): number {
  const result = n1 + n2;
  return result;
}

let addition: (a: number, b: number) => number;
addition = add;
console.log(addition(3, 4));
addition = add2;
console.log(addition(333, 4));
