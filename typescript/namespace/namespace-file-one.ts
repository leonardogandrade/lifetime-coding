import { FileTwo } from "./namespace-file-two";

namespace FileOne {
  export const myValue: string = "file one";
}
const myValue: string = "main file";

console.log(myValue);
console.log(FileOne.myValue);
console.log(FileTwo.myValue);
