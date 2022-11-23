const age = 30
const modules = {
    age: 39,
    name: 'Leonardo',
    greeting: function () {
        return `${this.name} is a ${this.age} years old.`
    }
}


console.log(modules.greeting())