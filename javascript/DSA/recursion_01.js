const factorial = (value) => {
    if (value === 0)
        return 1;
    return factorial(value - 1) * value;
}

console.log(factorial(5));

// function factorial(x) {

//     // if number is 0
//     if (x == 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// console.log(factorial(5))