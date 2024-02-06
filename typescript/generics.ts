// ---------- CLASSES ------------
// -------------------------------

// EX: 01
class MapValues<Type> {
  private value: Type | undefined;

  constructor(value: Type) {
    this.value = value;
  }

  public getValue() {
    return this.value;
  }

  public toString(): string {
    return `${this.value}`;
  }

  public getType(): string {
    return typeof this.value;
  }
}

interface dataProps {
  name: string;
  age: number;
}

// const mapValue = new MapValues<string>("34");
// console.log(mapValue.getValue());
// console.log(mapValue.getType());

// EX: 02

interface GenericInterface<Type> {
  value: Type;
  getValue: () => Type;
}

class DataValues<Type> implements GenericInterface<Type> {
  value: Type;

  constructor(value: Type) {
    this.value = value;
  }

  public getValue(): Type {
    return this.value;
  }
}

// const myData = new DataValues<Number>(40);
// console.log(myData.getValue());

// ---------- FUNCTIONS ------------
// -------------------------------

//  EX: 01

function SumUp<Type>(n1: Type, n2: Type) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  }
}

// console.log(SumUp<Number>(2, 3));

// ---------- CUSTOM TYPES ------------
// ------------------------------------

class Car {
  label: string = "generic car";
  wheels: number = 4;
  horn = (sound: string) => {
    return `${sound}`;
  };
}

class Truck extends Car {
  label = "Truck";
  wheels = 18;
}

class Vespa extends Car {
  label = "Vespa";
  wheels = 2;
}

function washCar<Type extends Car>(car: Type): Type {
  console.log(`Type of your vehicle: ${car.label}`);
  console.log(`Whashing all of ${car.wheels} tires`);
  console.log(`beeping horn: [${car.horn("bee bee")}`);
  return car;
}

// const truck = new Truck();
// washCar(truck);

// ---------- GENERIC TYPES -----------
// ------------------------------------

function properties<T>(args: Array<T>): T | Number {
  return args.length;
}

// console.log(properties(["a", "b", "c"]));

interface GenericFn {
  <Type>(args: Type): Type;
}

function identity<Type>(args: Type): Type {
  return args;
}

let myIdentity: { <Type>(args: Type): Type } = identity;
console.log(myIdentity(15));
