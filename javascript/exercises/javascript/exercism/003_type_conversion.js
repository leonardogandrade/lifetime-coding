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