const { fibo } = require("../javascript/DSA/revision/02/fibonaci");

test("Test Fibonacci time", () => {
    const start = new Date(Date.now()).getMilliseconds();
    const result = fibo(100);
    const end = new Date(Date.now()).getMilliseconds();
    expect(end - start).toBeLessThan(50);
})
