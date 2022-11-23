// 1 - Return the longest string from an array of strings

// let result = function myFunction(arr) {
//     const longest = arr.sort(
//         function (a, b) {
//             return b.length - a.length;
//         }
//     )[0];

//     return longest
// }

result = function myFunction(arr) {
    return arr.reduce((acc, cur) => {
        return acc.length > cur.length ? acc : cur
    })
}

// const sample = ['I', 'need', 'candy']
// console.log(result(sample))

// SORT ARRAY OF OBJECTS
// 2 - Sort the array by property b in ascending order

result = function myFunction(arr) {
    return arr.sort((a, b) => a.value - b.value)
}

const sample = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// console.log(result(sample))

// 3 - Create javascript object from two arrays
result = function myFunction(a, b) {
    let obj = new Object()
    a.forEach((value, key) => {
        obj[value] = b[key]
    })

    return obj
}

// console.log(result(['w', 'x', 'y', 'z'], [10, 9, 5, 2]))

// 4 - Verify if all elements are equal
result = function myFunction(arr) {
    return arr.every(x => x === arr[0])
}

// console.log(result([1, 1, 1, 2]))

// 5 - Join to sets
result = function myFunction(a, b) {
    return new Set([...a, ...b]).entries
}

// console.log(result(new Set('123'), new Set('234')))

// 6 - Join array of arrays
result = function myFunction(...arrays) {
    return [].concat.apply([], arrays)
}

// console.log(result(['a', 'b', 'c'], [4, 5, 6]))

result = function myFunction(...arr) {
    let merged = []
    arr.forEach((value, key) => {
        merged.push(...value)
    })
    return merged
}

// console.log(result([[1, 2, 3], [4, 5, 6]]))

result = function myFunction(arr) {
    return arr.sort((a, b) => a.b - b.b)
}

// console.log(result([{ a: 1, b: 4 }, { a: 2, b: 2 }]))

result = [3, 10, 2, 8, 3, 4].reduce((acc, cur, curI, curArr) => {
    if (cur === 3)
        curArr.splice(curI + 1, 0, 3, 3)
    return acc
})

// console.log(result)

result = function myFunction(deck) {
    // const first = deck.splice(0, 1)
    // const last = deck.splice(deck.length - 1, deck.length)
    deck.splice(deck.length / 2, 0, deck.splice(deck.length - 1, deck.length)[0])
    deck.splice(deck.length / 2, 0, deck.splice(0, 1)[0])
    return deck
}

// console.log(result([1, 2, 3, 5, 6, 10]))

result = function myFunction(deck) {
    deck.sort((a, b) => a - b)
    const second = deck.splice(0, 1)
    deck.splice(deck.length - 1, 0, second[0])
    return deck
}


// console.log(result([10, 1, 5, 3, 2]))

result = function myFunction(deck) {
    return deck.slice(Math.floor(deck.length / 2) - 1, Math.floor(deck.length / 2) + 1)
}

// console.log(result([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

result = function myFunction(deck) {
    for (let i = 0; i < Math.floor(deck.length / 2); i++) {
        let first = deck.slice(i, i + 1)
        let last = deck.slice(deck.length - i - 1, deck.length - i)
        deck[i] = last[0]
        deck[deck.length - i - 1] = first[0]
    }
    return deck
}

// console.log(result([2, 1, 6, 9, 3]))

result = function myFunction(deck) {
    return deck.reduce((acc, cur) => {
        if (cur === 3)
            acc.push(3, 3, 3)
        else
            acc.push(cur)
        return acc
    }, [])
}

console.log(result([1, 3, 9, 3, 7]))