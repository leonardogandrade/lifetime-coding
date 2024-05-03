// Sum all the elements which are passed through out function call by rest operator.

function sumAllElementsFromArray(...data) {
    const sum = [...data].reduce((acc, cur) => (
        acc += cur
    ))
    console.log(sum);
}

// sumAllElementsFromArray(1, 2, 3, 4, 5, 6, 7, 8)

// Find the unique values on a array

function uniqueElementsFromArray(data) {
    console.log([...new Set(data)])
}

// uniqueElementsFromArray([1, 1, 2, 2, 3, 3, 3, 3, 4])

function uniqueElementsFromArray02(data) {
    const result = data.filter((value, index, array) => {
        console.log(array.indexOf(value) === index)
        return array.indexOf(value) === index
    }
    )

    // console.log(result)
}

// uniqueElementsFromArray02([1, 1, 2, 2, 3, 3, 3, 4])

//[0, 1, 2, 3, 4, 5, 6, 7] - index
//[1, 1, 2, 2, 3, 3, 3, 4] - value

//[1,1,2,] - result


async function getData() {
    let info = {};
    let data = []

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/", { method: "GET" });
    const myData = await response.json();
    info = { count: myData.count, next: myData.next, previous: myData.previous };
    data = myData.results;

    console.log(info, data)
}

// getData();

/**
 * Combine two objects and change some properties
 * 
 * @param {Object} data 
 * @param {string} payload 
 */
function change(data, payload) {
    const newData = { ...data, b: { "c": payload } }
    console.log(newData)
}

// change({ "a": "a", b: { "c": "d" } }, "f")

/**
 * Combine two parameters, the first one is an array and the second one parameters and double the second one.
 * 
 * @param {Array} arr 
 * @param  {...any} elements 
 * @returns 
 */
function doubleElements(arr, ...elements) {
    return [...arr, ...elements.map(element => element * 2)]
}

// const result = doubleElements([1, 2, 3], 2, 4, 6, 8);
// console.log(result);


function minValue(...elements) {
    console.log(Math.min.apply(null, elements))
}

// minValue(1, 2, 3, 4, -5, 6, 7, 8)

function generateRandomIndex(length) {
    return
}

function removeRandomIndex(arr) {
    const randomIndex = Math.ceil(Math.random() * arr.length);
    console.log(randomIndex)
    console.log(arr.splice(randomIndex, 1))
}

removeRandomIndex([1, 2, 3, 4, 5, 6, 7, 8, 9])