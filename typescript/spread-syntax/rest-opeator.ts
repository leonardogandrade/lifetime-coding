interface SumProps {
  args: Array<number>;
}

function sum({ args }: SumProps) {
  const [x, y, z] = [...args];
  console.log(x + y + z);
}

sum({ args: [1, 2, 3] });

// Quando usamos uma interface em uma função estamos passando um objeto. Sendo assim, a chamada da função deve conter
// um objeto que possa ser desetruturado na assinatura da função.
// acima, se usarmos sum([1, 2, 3, 4]) o compilador informará que não foi possível encontrar a propriedade args nos parâmetros informados
// Error:
// Argument of type 'number[]' is not assignable to parameter of type 'SumProps'.
//   Property 'args' is missing in type 'number[]' but required in type 'SumProps'.ts(2345)

function concatenate(a: number, b: number[], c: string) {
  console.log(a, ...b, c);
}

concatenate(32.5, [1, 2, 3, 4], "A");

// Spread operator substitui o método apply.
// apply permite que seja passaddo um array para uma função

function sumDoisApply(x: number, y: number) {
  console.log("DOIS:", x + y);
}

function sumDois_spread(x: number, y: number) {
  console.log("DOIS:", x + y);
}

sumDoisApply.apply(null, [1, 2]);

// Copiar arrays

const arr = [1, 2, 3];
const arr2 = [...arr];

arr2.push(4);
console.log(arr);
console.log(arr2);

// Copia condicional

const summer: boolean = false;
const summerFruits: string[] = ["watermelon", "apple", "pine apple"];
const fruits = ["banana", "kiwi", "papaya"];

console.log("Copia condicional");
console.log([...fruits, ...(summer ? [...summerFruits] : [])]);

// Objetos

const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

let final = { ...obj1, ...obj2 };

console.log("COPIA DE OBJETOS:");
console.log(final);

console.log("COPIA ALTERANDO PROPRIEDADE:");
final = { ...obj1, ...obj2, y: 17 };
console.log(final);

console.log("COPIA CONDICIONAL:");
final = { ...obj1, ...obj2, ...(summer ? { z: "summer" } : {}) };
console.log(final);

const keys = ["a", "b", "c"];
const value = [1, 2, 3];

console.log(
  Object.assign({}, ...keys.map((key, idx) => ({ [key]: value[idx] })))
);

function remove(obj: Record<string, number>) {
  const { b, ...rest } = obj;
  console.log(rest);
}

remove({ a: 1, b: 7, c: 3 });

function mergeObjt(x: Record<string, number>, y: Record<string, number>) {
  const { b, ...rest } = y;
  console.log({ ...x, ...rest, d: b });
}

mergeObjt({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 });

function _multiply(a: Record<string, number>, b: number) {
  let newObj: Record<string, number> = {};
  const keys = Object.keys(a);
  const values = Object.values(a);

  for (const idx in keys) {
    newObj[keys[idx]] = values[idx] * b;
  }

  console.log(newObj);
}

function multiply(a: Record<string, number>, b: number) {
  return Object.entries(a).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value * b }),
    {}
  );
}

console.log(multiply({ j: 9, i: 2, x: 3, z: 4 }, 10));

function myFunction(...arrays: any[]) {
  console.log(arrays.flat());
}

myFunction([true, true], [1, 2], ["a", "b"]);
