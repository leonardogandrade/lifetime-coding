// #EX 1: You can pass an object to a function using .call
function sallad() {
    const fruit = this.fruit;
    const servings = this.servings;
    return [fruit, servings]
}

const ingredients = {
    fruit: 'whatermelon',
    servings: 5,
}

// const result = sallad.call(ingredients);
// console.log(result)

// #EX 2: you can call another function passing the data from the present one.

function dressing(party, gender) {
    this.party
    this.gender
    console.log(`${gender} should dress smoking in ${party} parties.`)
}

function goToParty(party, gender) {
    dressing.call(this, party, gender)
}

// new goToParty('fancy', 'men')

const person = {
    name: "Leonardo",
    getName: function () {
        return this.name
    }
}

p1 = person.getName

// const _p1 = p1.bind(person)
// console.log(_p1())

function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Cria uma função com um argumento principal predefinido
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
console.log(list3)