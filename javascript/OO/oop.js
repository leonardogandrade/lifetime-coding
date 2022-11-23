class Person {
    constructor(name, ssn) {
        this._name = name;
        this._ssn = ssn
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value
    }
}

const p1 = new Person('Leonardo', '12345-67');
console.log(p1.name)
p1.name = 'Barbara'
console.log(p1.name)
p1.cpf = '123456789'
console.log(p1.cpf)