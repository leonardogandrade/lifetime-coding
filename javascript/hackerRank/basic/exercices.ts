const values = <number[]>[1, 1, 1, 2, 2, 3, 3, 4];

namespace hackerhank {
  export function pairs() {
    const result = values.reduce((acc: any, cur: any) => {
      if (!acc[cur]) {
        acc[cur] = 1;
      } else {
        acc[cur] += 1;
      }

      return acc;
    }, {});

    return result;
  }
}

(() => {
  const pairs = hackerhank.pairs();
  let total = 0;

  Object.values(pairs).forEach((value: any) => {
    total += Math.floor(value / 2);
  });
  console.log(total);
})();
