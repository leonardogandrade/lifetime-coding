function fibo(n: number): number {
  if (n === 1 || n === 0) {
    return n;
  }

  return fibo(n - 2) + fibo(n - 1);
}

process.on("message", () => {
  const result = fibo(20);
  (<any>process).send(result);
});
