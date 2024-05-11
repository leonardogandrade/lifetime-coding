const {
    century,
    palindrome,
    adjacent,
    poligon,
    statuesSpot,
    strictlySequence,
    matrixSum,
    longestString,
    levenshteinDistance,
    isLucky,
    streightLine,
    reverseString,
    reverseStringRecursive,
    factorial,
    fibonacciSequence,
    factorialRecursive,
    factorialMemoization,
    splitQueues,
    addBorder,
    greaterNotInList,
    ticTacToe,
    setsFrom,
    is_palindrome,
    fibRecursive,
    commomCharacters } = require('./modules');

////////////////////// Ex 01 //////////////////////
// Type the year to find out the century.
//const data = solution(1905)
//console.log(data)

////////////////////// Ex 02 //////////////////////
// const result = palindrome('abac');
// console.log(result);

////////////////////// Ex 03 //////////////////////
// const inputArray = [-23, 4, -3, 8, -12]
// const result = adjacent(inputArray);
// console.log(result);

////////////////////// Ex 04 //////////////////////
// const result = poligon(2);
// console.log(result);

////////////////////// Ex 05 //////////////////////
// const statues = [6, 2, 3, 8, 10]
// const result = statuesSpot(statues);
// console.log(result)

////////////////////// Ex 06 //////////////////////
//const sequence = [1, 1, 1, 2, 3];
//const sequence = [3, 6, 5, 8, 10, 20, 15]
//const sequence = [1, 2, 5, 3, 5] // true
//const sequence = [1, 2, 3, 4, 5, 3, 5, 6] // false

////////////////////// Ex 07 //////////////////////
//const sequence = [3, 5, 67, 98, 3];
//const result = strictlySequence(sequence);
//console.log(result)

////////////////////// Ex 08 //////////////////////
// const matrix =
//     [[1, 0, 3],
//     [0, 2, 1],
//     [1, 2, 0]]

// const result = matrixSum(matrix);
// console.log(result);

////////////////////// Ex 09 //////////////////////
// const inputArray = ["aba", "aa", "ad", "vcd", "aba"]
// //const inputArray = ["aa", "ad", "vcd", "aba"]
// const result = longestString(inputArray);
// console.log(result);

////////////////////// Ex 10 //////////////////////

// const s1 = 'aabcc';
// const s2 = 'adcaa';

// const result = commomCharacters(s1, s2);
// console.log(result);

////////////////////// Ex 10 //////////////////////
// const str1 = 'kitten';
// const str2 = 'sitting'; // difference 2

// const str1 = 'maria das dores';
// const str2 = 'mania das cores'; // difference 2

// const result = levenshteinDistance(str1, str2);
// console.log(result);

////////////////////// Ex 11 //////////////////////
// const number = 1230;
// const result = isLucky(number);
// console.log(result);

////////////////////// Ex 12 //////////////////////
// const A = [-1, 150, 190, 170, -1, -1, 160, 180];

// const result = streightLine(A);
// console.log(result)

////////////////////// Ex 13 //////////////////////
//const inputString = 'foo(bar)baz';
//const inputString = '((bar)foo)';
// const inputString = 'bar'

// const result = reverseStringRecursive(inputString);
// console.log(result);

// const result = reverseStringRecursive(inputString);
// console.log(result);

////////////////////// EXTRA //////////////////////
// const seq = 10;
// const result = fibonacciSequence(seq);
// console.log(result);

const result = fibRecursive(46);
console.log(result);

// const num = 5;
//const result = factorial(num);
//const result = factorialRecursive(num);
// const result = factorialMemoization(num);
// console.log(result);

////////////////////// Ex 14 //////////////////////
// const a = [50, 60, 60, 45, 70];
// const result = splitQueues(a);
// console.log(result);

////////////////////// Ex 15 //////////////////////
// const picture = ["abc", "ded"];
// const result = addBorder(picture);
// console.log(result);

////////////////////// Ex 15 //////////////////////
//const A = [1, 2, 3];
//const A = [1, 7, 3];
//const A = [1, 3, 6, 4, 1, 2]
//const A = [-1, -3]
//const A = [0, 1]
//const A = [-1]
//const A = [-7]
//const A = [12, 67]
//const A = [3, 6, -3, 4, 2, 0]
//const A = [3, 6, -3, 2, 1]
//const A = [-5, -4, -3, 9]
// const A = [-3, 0, 1, 2, 3, 4, 5]
// const date = new Date();
// const sec = date.getSeconds();
//const A = Array(100000000).fill().map(() => Math.round(Math.random() * sec))
//console.log(A)
// const result = greaterNotInList(A);
// console.log(result)

////////////////////// EXTRA //////////////////////
// const matrix = [
//     ['o', 'x', 'o'],
//     ['o', 'x', 'x'],
//     ['x', 'x', 'o'],
// ];

// const result = ticTacToe(matrix);
// console.log(result);

// const a = [1, 2, 3]
// const b = [2, 1, 3]
// const result = setsFrom(a, b);
// console.log(result);

const word = 'zaa';
console.log(is_palindrome(word))


// let array = ['1', , '3', ,];

// for (let index = 0; index < array.length; index++) {
//     if (array[index] === undefined)
//         array[index] = 'leo'
// }

// console.log(array)

//a b d e f h i r u