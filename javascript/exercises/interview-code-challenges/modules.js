function century(year) {
    if ((year % 100) > 0)
        return Math.trunc(year / 100) + 1
    else
        return year / 100
}

const palindrome = (inputString) => {
    const len = inputString.length
    for (let i = 0; i <= len; i++) {
        let end_i = (len - 1) - i;
        let init = inputString[i];
        let end = inputString[end_i];

        if (init !== end)
            return false
    }
    return true;
}

const adjacent = (inputArray) => {
    let largest = inputArray[0] * inputArray[1];
    for (let i = 0; i < inputArray.length; i++) {
        let adjacent = inputArray[i] * inputArray[i + 1];

        if (largest < adjacent)
            largest = adjacent;
    }

    return largest;
}

const poligon = (n) => {
    return (n * n) + ((n - 1) * (n - 1))
}

const statuesSpot = (statues) => {
    const sorted = statues.sort((a, b) => a - b);
    let diff_statues = 0;
    sorted.forEach((value, index, arr) => {
        const diffStatuesSpot = arr[index + 1] - arr[index]
        if (diffStatuesSpot > 1)
            diff_statues += diffStatuesSpot - 1;
    })
    return diff_statues;
}

// const strictlySequence = (sequence) => {
//     let queue = [];
//     let len = sequence.length;
//     for (let i = 0; i < len - 1; i++) {
//         if ((sequence[i + 1] - sequence[i]) === 1)
//             queue.push(sequence[i]);
//         else if ((sequence[i + 2] - sequence[i]) === 1)
//             queue.push(sequence[i])
//     }
//     if (queue.length > 1)
//         return true;

//     return false;
// }

// const strictlySequence = (sequence) => {
//     let deletes = 0
//     sequence.forEach((value, index, arr) => {
//         if (arr[index + 1] > arr[index]) {
//             deletes = deletes;
//         } else {
//             let begin = index;
//             for (i = index; i < sequence.length; i++) {
//                 if (sequence[begin] < sequence[i])
//                     deletes = deletes;
//                 else
//                     deletes += 1;
//             }
//         }
//     });
//     // [3, 5, 67, 98, 3]
//     return deletes;
// }

// const strictlySequence = (sequence) => {
//     let deletes = 0;
//     for (let index = 1; index < sequence.length; index++) {
//         if (sequence[index] <= sequence[index - 1])
//             deletes += 1;
//     }
//     if (deletes <= 1)
//         return true;

//     return false;
// }

// const strictlySequence = (sequence) => {
//     let deletes = 0;

//     if (sequence[0] > sequence[1]) {
//         sequence.splice(0, 1);
//         deletes += 1;
//     }

//     for (let index = 1; index < sequence.length; index++) {

//         if (sequence[index] <= sequence[index - 1] || sequence[index] <= sequence[index - 2]) {
//             if (sequence[index - 1] <= sequence[index + 1])
//                 sequence.splice(index, 1);
//             else
//                 sequence.splice(index - 1, 1);

//             deletes += 1;
//             index--;
//             console.log(sequence)
//         }
//     }
//     if (deletes <= 1)
//         return true;

//     return false;
// }

const strictlySequence = (sequence) => {
    let deletes = 0;
    for (let index = 1; index < sequence.length; index++) {
        if (sequence[index] <= sequence[index - 1]) {
            deletes++
            if (deletes > 1)
                return false;
            if (sequence[index] <= sequence[index - 2] && sequence[index + 1] <= sequence[index - 1])
                return false;
        }
    }
    return true;
}

// const matrixSum = (matrix) => {
//     let sumed = 0;
//     const lineOne = matrix[0];

//     sumed = lineOne.reduce((acc, val) => {
//         return acc + val;
//     })

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix.length + 1; j++) {
//             //console.log(matrix[i][j])
//             if (i > 0)
//                 if (matrix[i - 1][j] > 0)
//                     sumed += matrix[i][j]
//         }
//     }

//     return sumed;
// }


// const matrixSum = (matrix) => {
//     let sumed = 0;
//     const lineOne = matrix[0];
//     let hauntedColomns = [];

//     sumed = lineOne.reduce((acc, val) => {
//         return acc + val;
//     })

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix.length; j++) {
//             if (matrix[i][j] === 0)
//                 hauntedColomns.push(j)
//             if (i > 0) {
//                 let haunted = hauntedColomns.find(element => element === j);
//                 if (typeof (haunted) === "undefined")
//                     sumed += matrix[i][j]
//             }
//         }
//     }

//     return sumed;
// }


const matrixSum = (matrix) => {
    let sumed = 0;
    const lineOne = matrix[0];
    let hauntedColomns = [];

    sumed = lineOne.reduce((acc, val) => {
        return acc + val;
    })

    for (let i = 0; i < matrix.length; i++) {
        let line = matrix[i];
        for (let j = 0; j < line.length; j++) {
            if (matrix[i][j] === 0)
                hauntedColomns.push(j)
            if (i > 0) {
                let haunted = hauntedColomns.find(element => element === j);
                if (typeof (haunted) === "undefined")
                    sumed += matrix[i][j]
            }
        }
    }

    return sumed;
}

const longestString = (inputArray) => {
    let longest = 0;
    let arrayOfLongest = [];
    let result = [];

    inputArray.forEach((value, index, arr) => {
        let lenString = value.length;
        if (lenString >= longest) {
            longest = lenString;
            arrayOfLongest.push(value);
        }
    });

    arrayOfLongest.forEach((value, index, arr) => {
        if (value.length >= longest) {
            result.push(value);
        }
    })
    return result;
}

// const commomCharacters = (s1, s2) => {
//     let total = 0;
//     let uniqueCharacters = new Set();
//     for (let i = 0; i < s1.length; i++) {
//         for (let j = 0; j < s2.length; j++) {
//             if (s1[i] === s2[j]) {
//                 total += 1;
//                 uniqueCharacters.add(s1[i]);
//             }

//         }
//     }
//     return uniqueCharacters.size;
// }

const commomCharacters = (s1, s2) => {
    const totalS1 = {}
    const totalS2 = {}
    let result = 0;

    for (let i = 0; i < s1.length; i++) {
        typeof (totalS1[s1[i]]) === "undefined" ? totalS1[s1[i]] = 1 : totalS1[s1[i]] += 1;
    }

    for (let i = 0; i < s2.length; i++) {
        typeof (totalS2[s2[i]]) === "undefined" ? totalS2[s2[i]] = 1 : totalS2[s2[i]] += 1;
    }

    for (let [key_s1, value_s1] of Object.entries(totalS1)) {
        for (let [key_s2, valeu_s2] of Object.entries(totalS2)) {
            if (key_s1 === key_s2)
                result += Math.min(value_s1, valeu_s2);
        }
    }

    return result;
}

const levenshteinDistance = (str1, str2) => {
    let s_major;
    let s_minor;
    let diff = 0;

    if (str1.length > str2.length) {
        s_major = str1;
        s_minor = str2;
    } else {
        s_major = str2;
        s_minor = str1;
    }


    for (let i = 0; i < s_major.length; i++) {
        for (let j = 0; j < j < s_minor.length; j++) {
            if (s_major[i] != s_minor[i])
                diff++;
            break;
        }
    }
    return diff;
}

const isLucky = (number) => {
    const numberString = number.toString();
    const firstHalf = numberString.substring(0, numberString.length / 2);
    const secondHalt = numberString.substring(numberString.length / 2, numberString.length)
    const f_array = Array.from(firstHalf);
    const s_array = Array.from(secondHalt)

    const f_sum = f_array.reduce((acc, val) => {
        return parseInt(acc) + parseInt(val);
    });

    const s_sum = s_array.reduce((acc, val) => {
        return parseInt(acc) + parseInt(val);
    })

    if (f_sum === s_sum)
        return true;

    return false;
}

const streightLine = (a) => {
    const nonTreeArray = [];
    a.filter((value) => {
        if (value != -1)
            nonTreeArray.push(value);
    });

    const sortedElementsWithoutTrees = nonTreeArray.sort((a, b) => a - b).reverse();

    let sorted = [];

    a.forEach((val, index, arr) => {
        if (val != -1)
            a[index] = sortedElementsWithoutTrees.pop();
    });

    return a;
}

const reverseString = (inputString) => {
    let begin;
    let end;
    let finished = false;
    let replaced = inputString;

    while (!finished) {
        if (replaced.search(/[()]/) === -1)
            break;

        for (let i = 0; i < replaced.length; i++) {
            if (replaced[i] !== ')') {
                if (replaced[i] === '(')
                    begin = i
                end = i;
            } else
                break;
        };
        begin++;
        end++;
        let partToReverse = replaced.substring(begin, end)
        let reversedPart = Array.from(partToReverse).reverse().join('');
        replaced = replaced.replace(partToReverse, reversedPart);

        replaced = replaced.substring(0, begin - 1) + replaced.substring(begin);
        replaced = replaced.substring(0, end - 1) + replaced.substring(end);

        if (replaced.search(/[()]/) === -1)
            finished = true;
    }

    return replaced;

}


const reverseStringRecursive = (inputString) => {
    function reverseParentheses(s) {
        if (s.includes('(')) {
            return reverseParentheses(reverseOnce(s));
        } else {
            return s;
        }
    }

    function reverseOnce(s) {
        var regexp = /\(([a-z]*)\)/i;
        var subStr = regexp.exec(s)[1];
        subStr = subStr.split('').reverse().join('');
        return s.replace(regexp, subStr)
    }

    return reverseParentheses(inputString)
}

const fibonacciSequence = (seq) => {
    const fibo = [1, 1]
    if (seq <= 1)
        return 1
    else {
        let i = 1;
        while (fibo.length < seq) {
            fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
            i++;
        }
    }
    return fibo;
}

const factorial = (num) => {
    if (num <= 0)
        return 1;

    let index = 1;
    let fact = 1;

    while (index <= num) {
        fact *= index;
        index++;
    }

    return fact;
}

const factorialRecursive = (num) => {

    if (num <= 1)
        return 1;

    return num * factorialRecursive(num - 1);
}

const factorialMemoization = (num, memo) => {
    memo = memo || {};

    if (memo[num])
        return memo[num];

    if (num <= 1)
        return 1;

    return memo[num] = num * factorialMemoization(num - 1);
}

const splitQueues = (a) => {
    let teams = {
        'team_1': 0,
        'team_2': 0
    }

    a.forEach((value, index, arr) => {
        !(index % 2) ? teams.team_1 += value : teams.team_2 += value;
    })
    return [teams.team_1, teams.team_2]
}

const addBorder = (picture) => {
    const top = '*'.repeat(picture[0].length + 2).split('').join('');
    const bottom = '*'.repeat(picture[0].length + 2).split('').join('');
    let result = []
    result[0] = (top);

    for (let indexI = 0; indexI < picture.length; indexI++) {
        let line = '*' + picture[indexI] + '*';
        result.push(line.split('').join(''));
    }
    result.push(bottom);
    return result;
}

// function greaterNotInList(A) {
//     const x = new Set();
//     let greater_not;

//     A.sort((a, b) => a - b)
//     A.forEach((val, index, arr) => {
//         x.add(val)
//     });

//     const x_ = Array.from(x)
//     for (index = 0; index < x_.length - 1; index++) {
//         let diff = x_[index + 1] - x_[index]
//         if (diff > 1)
//             greater_not = x_[index] + 1
//         else
//             greater_not = x_[x_.length - 1] + 1
//     }

//     if (greater_not <= 0)
//         return 1
//     else
//         return greater_not;
// }

function greaterNotInList(A) {
    A.sort((a, b) => a - b);
    let greaterNotIn;
    let diff = 1;
    let minor;
    let last;

    for (index = 0; index < A.length; index++) {
        if (A[index] > 1 && last < 0) {
            greaterNotIn = 1
            break;
        }

        diff = A[index + 1] - A[index];
        if (A[index] >= 0) {
            if (diff > 1) {
                greaterNotIn = A[index] + 1;
                break;
            }
            else {
                greaterNotIn = A[index] + 1;
            }
        } else
            minor = A[index];
        last = A[index];
    }

    if (minor < 0 && greaterNotIn == null)
        return 1;

    return greaterNotIn;
}

// [1, 3, 6, -3, 4, 1, 2]
// [-3, 1, 2, 3, 4, 6]

// function greaterNotInList(A) {
//     const x = new Set();
//     let greater_not;

//     A.sort((a, b) => a - b);
//     let last;

//     for (index = 0; index < A.length; index++) {

//         last = Array.from(x).pop();
//         x.add(A[index]);
//         let diff = A[index] - last

//         if (diff > 1) {
//             greater_not = last + 1;
//             break;
//         } else {
//             greater_not = A[index] + 1;
//         }
//     };

//     if (greater_not <= 0)
//         return 1
//     else
//         return greater_not;
// }

const ticTacToe = (matrix) => {
    const X = 'x';
    const O = 'o';
    let winner;
    let column;
    let main_diagonal;
    let secondary_diagonal;
    let lineNumber = 0;

    for (let index = 0; index < 3; index++) {
        // verify patter in lines
        if (matrix[index].toString().split(',').join('') == 'xxx') {
            winner = `line${index + 1} ${X}`
            break;
        }
        else if (matrix[index].toString().split(',').join('') == 'ooo') {
            winner = `line${index + 1} ${O}`;
            break;
        }

        // Verify pattern in columns
        column = `${matrix[0][index]}${matrix[1][index]}${matrix[2][index]}`;

        if (column == "ooo") {
            winner = `column${index + 1} ${O}`
            break;
        } else if (column == "xxx") {
            winner = `column${index + 1} ${X}`
            break;
        }

        // Verify diagonals
        main_diagonal = `${matrix[0][index]}${matrix[1][index]}${matrix[2][index]}`
        secondary_diagonal = `${matrix[0][index]}${matrix[1][index]}${matrix[2][index]}`

        if (main_diagonal == "ooo") {
            winner = `main diagonal ${O}`
            break;
        } else if (main_diagonal == "xxx") {
            winner = `main diagonal ${X}`
            break;
        }

    }
    console.log(diagonal);
    return winner;
}

function setsFrom(a, b) {


    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    let pairs = 0;
    let members = 0;
    let swap = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < j < b.length; j++) {
            if (a[i] != b[i])
                swap++;
            else
                pairs++;
            break;
        }
    }

    const a_array_sorted = a.sort((a, b) => a - b);
    const b_array_sorted = b.sort((a, b) => a - b);

    // for (let i = 0; i < a.length; i++) {
    //     console.log(a[i], b[i])
    //     if (a[i] === b[i]) {
    //         pairs++
    //     } else {
    //         swap++;
    //     }

    // }

    // const a = [4, 6, 3]
    // const b = [2, 1, 1]

    // for (a_ in a_array_sorted) {
    //     for (b_ in b_array_sorted) {
    //         if (a_ === b_) {
    //             members++;
    //             pairs++;
    //         }
    //     }
    // }

    console.log(pairs, swap)

    if (pairs >= 1 && swap <= 2 && arrayEquals(a_array_sorted, b_array_sorted))
        return true;

    return false;

}

function is_palindrome(inputString) {
    let sorted = inputString.split('').sort();
    let stop = false;
    l_init = 0;
    l_final = sorted.length - 1;
    p_init = 0;
    p_final = sorted.length - 1;
    let palindrome = [];
    let aux = [];

    while (!stop) {
        if (sorted[l_init] === sorted[l_init + 1]) {
            palindrome[p_init] = sorted[l_init];
            palindrome[p_final] = sorted[l_init + 1];
            sorted.splice(0, 2);
            p_init++;
            p_final--;

        } else {
            aux.push(sorted[l_init]);
            sorted.splice(l_init, 1);
        }

        if (sorted.length === 0)
            stop = true;
    }

    if (palindrome.length > 0) {
        for (let index = 0; index < palindrome.length; index++) {
            if (palindrome[index] === undefined)
                palindrome[index] = aux.shift();
        }
    } else {
        palindrome = aux;
    }

    let normal = palindrome.join('')
    let reversed = palindrome.reverse().join('');
    return normal === reversed;
}



module.exports = {
    century,
    is_palindrome,
    palindrome,
    adjacent,
    poligon,
    statuesSpot,
    strictlySequence,
    matrixSum,
    longestString,
    commomCharacters,
    levenshteinDistance,
    isLucky,
    streightLine,
    reverseString,
    reverseStringRecursive,
    fibonacciSequence,
    factorial,
    factorialRecursive,
    factorialMemoization,
    splitQueues,
    addBorder,
    greaterNotInList,
    ticTacToe,
    setsFrom,
}

// 2, 3, 6, 8, 10, 20


// 0,1,2,3,4
// a,a,b,a,a
