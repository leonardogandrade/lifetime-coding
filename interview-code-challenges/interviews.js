// how deny var to has a global scope

{
    (function () {
        var number = 1;
        console.log('inside: ' + number)
    })()
}


let a = function () {
    return arguments // returns [Arguments] { '0': 'hi' }
}
// console.log(a('hi'))

let b = () => {
    arguments // returns undefined
}

// console.log(b('hi'))

const message = function () {
    return {
        message: 'hi'
    }
}

console.log(message())