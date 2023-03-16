function Human(age, gender) {
    this.speaks = true;
    this.age = age;
    this.gender = gender;
}

const leo = new Human(39, 'M')

Human.prototype.carLicense = function () {
    if (this.age >= 18)
        return `allowed to have a car licence.`
    return `not allowed to have a car license.`
}

Human.prototype.protos = function () {
    return this
}

console.log(leo.speaks)
console.log(leo.carLicense())
console.log(leo.protos())
