const person = { name: 'Barbara' }

function myName() {
    console.log(this.name);
}

myName.apply(person);