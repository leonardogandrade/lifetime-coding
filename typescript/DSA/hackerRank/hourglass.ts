function hourGlassAux(crop: number[][], indexStart: number) {
  const joined = [...crop[0], crop[1][1], ...crop[2]];

  const total = joined.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return total;
}

function hourGlassMain(arr: number[][]): number[][] {
  let result = new Array<number>(arr.length - 2)
    .fill(0)
    .map(() => new Array<number>(arr.length - 2).fill(0));

  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = 0; j <= arr.length - 3; j++) {
      let crop = [
        arr[i].slice(j, j + 3),
        arr[i + 1].slice(j, j + 3),
        arr[i + 2].slice(j, j + 3),
      ];
      let sum = hourGlassAux(crop, j);
      result[i][j] = sum;
    }
  }
  return result;
}

const array: number[][] = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0 - 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const _result = hourGlassMain(array);
console.log(_result);
