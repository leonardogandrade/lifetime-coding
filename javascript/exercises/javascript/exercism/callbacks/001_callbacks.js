function success() {
    console.log('SUCCESS')
}

function error_() {
    console.log('ERROR')
}


function errorFunction() {
    return a[5]
}

function main() {
    try {
        errorFunction()
        success()
    } catch (err) {
        error_()
    }
}

// main();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr.map(x => x))