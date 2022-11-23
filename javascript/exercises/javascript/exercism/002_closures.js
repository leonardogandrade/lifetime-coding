// 1

// const result1 = (x) => {
//     return x * 3
// }

// const result2 = (y) => {
//     return y * y
// }

// console.log(result1(result2(2)))

function composeTransform(...transformers) {
    return (x, y) => transformers.reduce((res, tr) => tr(...res), [x, y])
}

function n_(x, y) {
    return y, x
}

// console.log(n_(2, 1))


function memoizeTransform(f) {
    let lastX, lastY, lastResult
    return (x, y) => {
        if (lastX === x && lastY === y) return lastResult;
        lastX = x
        lastY = y
        lastResult = f(x, y)
        return lastResult
    }
}

const leftInput = [2, 4];
const rightInput = [1, 5, 7];

function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''))
}

function luckyNumber(value) {
    const reversed = String(value).split('').reverse().join('')
    return Number(reversed) === value
}

function errorMessage(input) {
    if (input === '' || typeof (input) === 'undefined' || input === null)
        return 'Required field'
    else if (isNaN(input) || Number(input) === 0)
        return 'Must be a number besides 0'
    else
        return ''
}

console.log(errorMessage('0'))