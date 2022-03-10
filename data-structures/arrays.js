// Every can be use to apply a a test in every element from an array.
// In the example below we are testing if every single element is even
const even_array = [2, 4, 8, 6];
const odd_array = [1, 3, 5, 7, 9];
const matrix = [
    [9, 2, 3, 4, 5],
    [1, 9, 3, 4, 5],
    [1, 2, 9, 4, 5],
    [1, 2, 3, 9, 5],
    [1, 2, 3, 4, 9],
];

let result;

// result = array.every((element) => !(element % 2));
// console.log('example I');
// console.log(result);

// You can separately specify a function to be called
function callback(element, index, array) {
    return !(element % 2)
}

// result = array.every(callback);
// console.log('example II');
// console.log(result);

const principal_diagonal = () => {
    for (let i = 0; i < matrix.length; i++) {
        const line = matrix[i];

        for (let j = 0; j < line.length; j++) {
            if (i === j)
                console.log(line[i])
        }
    }
}

// Print Principal diagonal
// principal_diagonal();

// Use of SOME method

// console.log(even_array.some(value => {
//     return value % 2
// }));

// #################### ARRAY OF OBJECTS ####################

function obj(name, age) {
    {
        this.name = name;
        this.age = age;
    }
}

const p1 = new obj('leo', 39);
const p2 = new obj('binha', 33);

const array_of_objects = []
array_of_objects.push(p1);
array_of_objects.push(p2);

console.log(array_of_objects[0].name);