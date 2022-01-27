const numberOne = 1;
const numberTwo = 2;

// This is the function which we're planning to pass as an argument
const sum = (numberOne, numberTwo) => {
    this.numberOne = numberOne
    this.numberTwo = numberTwo

    return this.numberOne + this.numberTwo;
}

// This is the main function which receives an previous defined function as one of its arguments
const main = (functionalArgument, firstArgument, secondArgument) => {
    return functionalArgument(firstArgument, secondArgument);
}


const result = main(sum, numberOne, numberTwo);

console.log(result);