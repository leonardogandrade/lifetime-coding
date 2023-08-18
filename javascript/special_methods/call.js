const person = {
    fullname: function fullname() {
        return `${this.first_name} ${this.last_name}`
    }
}

const person1 = {
    first_name: 'Leonardo',
    last_name: 'Gerheim'
}

const _name = person.fullname.call(person1)
console.log(_name)