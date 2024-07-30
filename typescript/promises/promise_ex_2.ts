// Input a number, double it, increase it by 10, and then multiply by 3.
// Each operation should be in a separate Promise and then chained together.

namespace PromiseExTwo {
  const double = (value: number) =>
    new Promise<number>((resolve) => {
      resolve(value * 2);
    });

  const addTen = (value: number) =>
    new Promise<number>((resolve) => {
      resolve(value + 10);
    });

  const multiplyByThree = (value: number) =>
    new Promise<number>((resolve) => {
      resolve(value * 2);
    });

  double(5)
    .then(addTen)
    .then(multiplyByThree)
    .then((resolved) => {
      console.log(resolved);
    });
}
