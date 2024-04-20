function sumTwo(a) {
  return (b) => {
    return a + b;
  };
}

const response = sumTwo(2)(4);
console.log(response);
