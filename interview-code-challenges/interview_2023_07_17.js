// function solution(statues) {
//     statues.sort((a, b) => b - a);
//     let total = 0;

const { replace } = require("lodash");

//     for (let i = 0; i < statues.length; i++) {
//         if (statues[i + 1] !== undefined)
//             if (statues[i] - statues[i + 1] > 1)
//                 total += (statues[i] - statues[i + 1]) - 1
//     }
//     return total
// }

// const value = [6, 2, 3, 8]
// console.log(solution(value))


// function solution(sequence) {
//     let seq = false;
//     for (let i = 0; i < sequence.length - 2; i++) {
//         if (sequence[i + 1] > sequence[i])
//             seq = true;
//         else if (sequence[i + 2] !== undefined && sequence[i + 2] > sequence[i]) {
//             seq = true;
//         }
//         else
//             seq = false;

//     }

//     return seq;
// }


function solution(sequence) {
    let replaces = 0;
    let prev_replaced;
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i - 1] >= sequence[i]) {
            replaces += 1;
            prev_replaced = sequence[i - 1]
        }

        if (sequence[i + 1] === sequence[i - 1])
            replaces += 1;

        if (prev_replaced >= sequence[i + 1])
            replaces += 1;
    }
    return replaces
}

function seq_2(sequence) {
    var found = 0;
    for (var i = 0; i < sequence.length; i++) {

        if (sequence[i] <= sequence[i - 1]) {
            found++;
            // check if more than one nonincreasing found
            if (found > 1) return false;

            // check if second previous number is equal to / bigger than current number
            // and previous number is equalto / bigger than next number
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
        }

    }
    return true;
}


const value = [40, 50, 60, 10, 20, 30]
console.log(seq_2(value));
