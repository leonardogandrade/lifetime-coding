const _values = <number[]>[1, 1, 1, 2, 2, 3, 4, 4, 4];

const total_pairs = _values.reduce((acc: any, cur: any) => {
  if (!acc[cur]) {
    acc[cur] = 1;
  } else {
    acc[cur] += 1;
  }
  return acc;
}, {});

const pairs = Object.values(total_pairs);
let total: number = 0;

pairs.forEach((item: any) => {
  total += Math.floor(item / 2);
});

console.log(total);
