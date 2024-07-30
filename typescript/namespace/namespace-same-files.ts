namespace One {
  export const myValue: number = 10;
}

namespace Two {
  const myValue: number = 20;
  console.log(One.myValue);
  console.log(myValue);
}
