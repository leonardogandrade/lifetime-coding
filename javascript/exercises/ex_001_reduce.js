// Ex 1
// Sum up all the elements of an given array Expect: 45

values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Ex 2
// Sum up values in a given object

values = [{ x: 1 }, { x: 2 }, { x: 3 }]

// Ex 3
// Count equal names Expect: {ALice: 2, Bob: 1, Tiff: 1, Bruce: 2} 
values = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bruce'];

// Ex 4
// Grouping by characteristc ex: {20: [{ name: 'Max', age: 20 },{ name: 'Jane', age: 20 }], 21 : [{ name: 'Alice', age: 21 }]}

values = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

// Ex 5
// Group all books in one array and return it as an object. expect: {'allbooks' : ['Bible', 'Harry Potter','War and peace', 'Romeo and Juliet']}

values = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];


// ######################## -* ANSWERS *- ########################

// Ex 1
// Sum up all the elements of an given array

values = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sumup(array) {
    return array.reduce((acc, value) => {
        return acc + value
    });
}

// Ex 2
// Sum up values in a given object
// Sum up all the elements of an given array Expect: 6

values = [{ x: 1 }, { x: 2 }, { x: 3 }]

result = (array) => {
    return array.reduce((acc, cur) => {
        return acc + cur.x
    }, 0)
}

// console.log(result(values))

// Ex 3
// Count equal names
values = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bruce'];

result = (array) => {
    return array.reduce((acc, cur) => {
        if (cur in acc)
            acc[cur]++
        else
            acc[cur] = 1

        return acc
    }, {})
}

// console.log(result(values))

// Ex 4
// Grouping by characteristc ex: {20: [{ name: 'Max', age: 20 },{ name: 'Jane', age: 20 }], 21 : [{ name: 'Alice', age: 21 }]}

let pessoas = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

result = (array, keyValue) => {
    return array.reduce((acc, cur) => {
        let key = cur[keyValue]

        if (!acc[key])
            acc[key] = []

        acc[key].push(cur.name)

        return acc
    }, {})
}

// console.log(result(pessoas, 'age'))

// Ex 5
// Group all books in one array and return it as an object. expect: {'allbooks' : ['Bible', 'Harry Potter','War and peace', 'Romeo and Juliet']}

values = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// result = (array) => {
//     return array.reduce((acc, cur) => {
//         if (!acc['allbooks'])
//             acc['allbooks'] = []

//         acc['allbooks'] = [...acc.allbooks, ...cur.books]

//         return acc
//     }, {})
// }

result = (array) => {
    return array.reduce((acc, cur) => {
        if (!acc['allbooks'])
            acc['allbooks'] = []

        acc['allbooks'].push(...cur.books)

        return acc
    }, {})
}

// console.log(result(values))
