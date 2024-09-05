import { DynProg } from "./DSA/dynamic-programming";

describe("Dynamic Programming tests", () => {
  it("Should execute Fibonnaci sequence in a low time", () => {
    const dp = new DynProg.Dp();
    const start = new Date().getTime();
    const result = dp.fibonnacci(10);
    const end = new Date().getTime();

    expect(end - start).toBeLessThan(1000);
  });
});
