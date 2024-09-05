namespace Socks {
  function sockMerchant(n: number, ar: number[]) {
    const reduced = ar.reduce((acc: Record<string, number>, cur: number) => {
      if (!acc[cur]) {
        acc[cur] = 1;
      } else if (acc[cur]) {
        acc[cur] += 1;
      }

      return acc;
    }, {});
    const total = Object.values(reduced).reduce(
      (acc, cur) => (acc += Math.floor(cur / 2)),
      0
    );

    return total;
  }

  const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const result = sockMerchant(array.length, array);
  console.log(result);
}
