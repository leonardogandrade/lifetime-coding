let names = ['Barbar1a', 'Rita', 'Leonardo']
let numbers = [1, 3, 3, 5, 6, 7, 8, 9]

const pattern = /ar/

// names.filter((value, index) => {
//     if (value.match(pattern))
//         console.log(value)
// })

// const upper = (value, array) => {

//     const result = array.filter((value, index, arr) => {
//         return this
//     })

//     return result
// }

// console.log(upper(6, numbers))

// ---------------------
// -------- THIS --------
// ----------------------
// Here this assumes the object's value

// math = {
//     sum_: function(){
//         return this.n1 + this.n2
//     }
// }


// let operations = Object.create(math)

// operations.n1 = 2
// operations.n2 = 3

// console.log(operations.sum_())

// ----------------------
// -------- Bind --------
// ----------------------

// Ex 1
// x = 9

// let model = {
//     x: 10,
//     f1: function () {
//         return this.x
//     }
// }

// console.log(model.f1()) // return 10

// const exec_f1 = model.f1
// console.log(exec_f1()) // return 9

// const binded = exec_f1.bind(model)
// console.log(binded()) // return 10

// ----------------------
// ------- Reduce -------
// ----------------------

// Ex 2
const wordsMap = ['barbara', 'rita', 'leonardo']

let words = wordsMap.reduce((acc, value) => {
    acc[value] = value
    return acc
}, {})

// console.log(words)

// Ex 3
// Sum up all the elements of an given array
let total = numbers.reduce((acc, value) => {
    return acc + value
})

// console.log(total)

// Ex 4
// Sum up values in a given object

const valuesObject = [{ x: 1 }, { x: 2 }, { x: 3 }]

total = valuesObject.reduce((acc, val) => {
    return acc + val.x
}, 0)

// console.log(total)

const arrayOfArrays = [[0, 1], [1, 2], [2, 3]]
const uniq = new Set()
result = arrayOfArrays.reduce((acc, value) => {
    return acc.concat(value)
})

// console.log(new Set(result))

// Ex 5
// Count equal names
names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bruce'];

result = names.reduce((acc, value) => {
    if (value in acc)
        acc[value]++
    else
        acc[value] = 1

    return acc
}, {})

// console.log(result)

// Ex 6
// Grouping by characteristc ex: {20: [{ nome: 'Max', idade: 20 },{ nome: 'Jane', idade: 20 }], 21 : [{ nome: 'Alice', idade: 21 }]}
let pessoas = [
    { nome: 'Alice', idade: 21 },
    { nome: 'Max', idade: 20 },
    { nome: 'Jane', idade: 20 }
];

const result = (array, keyValue) => {
    return array.reduce((acc, obj) => {
        let key = obj[keyValue]

        if (!acc[obj])
            acc[key] = []

        acc[key].push(obj)
        return acc
    }, {})
}

console.log(result(pessoas, 'idade'))
