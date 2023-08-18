// bind method permits change this object inside a function
// Ex 1: pass 
function person(name, surname) {
    this.name = name
    this.surname = surname
    return `${name} ${surname} - ${this._val}`
}

// this._val = 1983
// console.log(person.bind(this, 'Leo', 'Andrade')())


// Ex 2: 
function joinPeaces() {
    return Array.prototype.slice.call(arguments);
}

const arr1 = [1, 2, 3, 4]

// const result = joinPeaces.bind(null, 1, 2, 3, 'Z');
// console.log(result())

Array.prototype.UPPER = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }

    return this
}

let names = ['leo', 'barbara', 'rita']
const result = names.UPPER()
console.log(result)