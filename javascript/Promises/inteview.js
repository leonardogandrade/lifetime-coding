// /**
//  * 
//  * @param {*} array ex: [1,2,3]
//  * @param {*} callback a function which will be applied to the array
//  * @returns the array doubled
//  */

// function doubleEach(array, callback) {
//     let result;

//     if (array instanceof (Array)) {
//         result = array.map(element =>
//             callback(element)
//         )
//     } else
//         return 'Error, array not provided.'

//     return result
// }

// function callback(value) {
//     return value * 2
// }

// const array = [1, 2, 3, 4, 5]

// const final_result = doubleEach(2, callback)
// // console.log(final_result)


function greater(arr) {
    if (!arr.every(value => typeof (value) == 'string'))
        throw new TypeError()

    return arr.reduce((prev, cur) =>
        prev.length > cur.length ? prev : cur
    )
}

// const payload = ['I', 'need', 'candy']

// const result = greater(payload)
// console.log(result)

function oderKey(arr) {
    return arr.sort((a, b) => a - b)
    return arr.sort((a, b) => a.b - b.b)
}

// const result = oderKey([{ a: 1, b: 2 }, { a: 5, b: 4 }])
// console.log(result)

function createObject(a, b) {
    return a.reduce((acc, cur, index) => {
        return { ...acc, [cur]: b[index] }
    }, {})
}

const result = createObject(['w', 'x', 'y', 'z'], [10, 9, 5, 2])
// console.log(result)

// const fs = require('fs')
// const { nextTick } = require('process')

// fs.readFile(__dirname, () => {
//     setTimeout(() => {
//         console.log('timeout')
//     }, 0)

//     setImmediate(() => {
//         console.log('imediate')
//     })
//     nextTick(() => {
//         console.log('nextTick')
//     })
// })

const unordered = {
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
};

// console.log(unordered);
// → '{"b":"foo","c":"bar","a":"baz"}'

const ordered = Object.keys(unordered).sort().reduce((acc, cur) => {
    acc[cur] = unordered[cur]
    return acc
}, {})
// console.log(ordered);
// → '{"a":"baz","b":"foo","c":"bar"}'

var number = 10

if (number >= 10) {
    var number = 11
    // console.log(number)
}
var number = 12
// console.log(number)


function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12


const promise = new Promise((resolve, reject) => {
    const numbers = [1, 2, 3]
    if (numbers.length > 3)
        resolve(numbers.length)
    else
        reject(numbers.length)
});

promise.then((resolve, reject) => {
    if (resolve) {
        console.log(`resolved with length ${resolve}`)
    } else if (reject) {
        console.log(`rejected with length ${resolve}`)
    }
})

const [one, two] = Promise.all(function one() { }, function two() { })

module.exports = { greater }


