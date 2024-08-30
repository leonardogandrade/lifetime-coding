// Conditionally types

// Ex: 1
// In the first example shows how a function receives their params and should present the language params options based on the role
// In case you pass "backend" as role, the only options show be BackendLangType otherwise selecting frontend as role, FrontendLangType
// should be the language options

namespace ConditionalTypeEx1 {
  type DeveloperType = {
    name: string;
  } & (
    | { role: "backend"; language: BackendLangType }
    | { role: "frontend"; language: FrontendLangType }
  );

  type BackendLangType = "Java" | "Python" | "Golang";
  type FrontendLangType = "javascript" | "Typescript";

  function developer({ name, role }: DeveloperType) {
    return { name, role };
  }

  developer({ name: "Leonardo", role: "backend", language: "Java" });
}

namespace ConditionalTypeEx2 {
  type ConditionalEx2<T> = T extends string[]
    ? string[]
    : T extends number
    ? number
    : never;

  const s1: ConditionalEx2<string[]> = ["1", "2"];
  const n1: ConditionalEx2<number> = 10;
}

namespace ConditionalTypeEx3 {
  type IdExtractIdType<T extends { id: number | string }> = T["id"];

  interface IdNumber {
    id: number;
  }

  interface IdString {
    id: string;
  }

  type objIdNumber = IdExtractIdType<IdNumber>;

  const num1: objIdNumber = 10;
  console.log(num1);

  // type ExtractIdType<T extends {id: string | number}> = T["id"]

  // interface NumericId {
  //     id: number
  // }

  // interface StringId {
  //     id: string
  // }

  // interface BooleanId {
  //     id: boolean
  // }

  // type NumericIdType = ExtractIdType<NumericId> // type NumericIdType = number
  // type StringIdType = ExtractIdType<StringId> // type StringIdType = string
  // type BooleanIdType = ExtractIdType<BooleanId> // won't work
}
