// Conditionally types
// In the first example shows how a function receives their params and should present the language params options based on the role
// In case you pass "backend" as role, the only options show be BackendLangType otherwise selecting frontend as role, FrontendLangType
// should be the language options

// type DeveloperType = {
//   name: string;
// } & (
//   | { role: "backend"; language: BackendLangType }
//   | { role: "frontend"; language: FrontendLangType }
// );

// type BackendLangType = "Java" | "Python" | "Golang";
// type FrontendLangType = "javascript" | "Typescript";
// type RoleType = "backend" | "frontend";

// interface DeveloperInterface {
//   name: string;
//   language: BackendLangType | FrontendLangType;
//   role?:
//     | { role: "backend"; language: BackendLangType }
//     | { role: "frontend"; language: FrontendLangType };
// }

// class Developer implements DeveloperInterface {
//   private _name: string;
//   private _role: RoleType;
//   private _language: BackendLangType | FrontendLangType;

//   constructor(
//     name: string,
//     role: RoleType,
//     language: BackendLangType | FrontendLangType
//   ) {
//     this._name = name;
//     this._role = role;
//     this._language = language;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(name: string) {
//     this._name = name;
//   }

// get role() {
//   return this._role;
// }

// set role(role: RoleType) {
//   this._role = role;
// }
// }

// const dev = new Developer("leonardo", "backend", "");
