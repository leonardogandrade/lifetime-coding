class People {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

const p1 = new People('Leo', 'M')

People.prototype.greeting = function () {
    return `Hello ${this.name}.`
}

People.prototype.changeName = function (name) {
    this.name = name
}

p1.changeName('Barbara')
console.log(p1.greeting())
