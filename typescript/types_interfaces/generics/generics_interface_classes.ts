interface GenericClass<U, T> {
  name: U;
  email: U;
  age: T;
  sayHello: () => U;
}

class Person<U, T> implements GenericClass<U, T> {
  name: U;
  email: U;
  age: T;

  constructor(name: U, email: U, age: T) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  sayHello(): U {
    return <U>`I'm ${this.name}`;
  }
}

const person = new Person("Donald Duck", "duck@donaldduck.com", 90);
const hello: String = person.sayHello();
console.log(hello);
