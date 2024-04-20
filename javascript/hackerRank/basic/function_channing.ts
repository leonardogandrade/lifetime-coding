class MyCLass {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public getValue() {
    return this.value;
  }

  public double() {
    this.value = this.value * 2;
    return this;
  }

  public divided(divisor: number) {
    this.value = this.value / divisor;
    return this;
  }
}

const myValue = new MyCLass(12);

const result = myValue.divided(3).double().getValue();
console.log(result);
