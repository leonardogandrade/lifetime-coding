function fn1() {
  const result = fn2();
  return "Fn1";
}

function fn2() {
  try {
    const resultFn3 = fn3();
    return resultFn3;
  } catch (error) {
    // console.error(error);
  }
}

function fn3() {
  throw new Error("Error calling Fn3");
  //   return "ok";
}

const main_result = fn1();
console.log(main_result);
