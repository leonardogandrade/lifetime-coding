class People {
    contructor(gender) {

        this._gender = gender
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set ssn(value) {
        this._ssn = value
    }

    get ssn() {
        return this._ssn
    }

    greeting() {
        return `Hello ${this.name}`
    }
}

const leo = new People('12345', 'M')
leo.name = 'Leonardo'
console.log(leo.name)
leo.ssn = '12345'
console.log(leo.ssn)
console.log(leo.greeting())
