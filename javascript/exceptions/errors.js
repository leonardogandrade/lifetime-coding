// // Appending a specific code
// function throwError() {
//     const error = new Error('error')
//     error.code = 13
//     return error
// }

// console.log(throwError())

const myName = 'leo'
const number = 6;

function nestedIfs() {
    if (myName === '') {
        console.log('empty value')
    } else {
        if (number < 2)
            console.log('not empty string but number less than 2.')
        else {
            if (number % 2 === 0)
                console.log('string not empty and even number.')
        }
    }
}

nestedIfs();

function resolvedManyIfs() {

}
