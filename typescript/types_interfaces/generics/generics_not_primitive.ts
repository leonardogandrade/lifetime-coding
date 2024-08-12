class Tesla {
  wheels: number = 4;
  beep = "beep beep";
  honk() {
    return `${this.beep}`;
  }
}

class Suv extends Tesla {
  wheels: number = 8;
  beep: string = "honk honk";
}

function carWash<T extends Tesla>(car: T) {
  console.log(car instanceof Suv);
  console.log(car.beep);
}

const mySuv = new Suv();

carWash(mySuv);
