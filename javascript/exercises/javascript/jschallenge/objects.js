// 1 - return all the except the b
// function myFunction(obj) {
//     return (({ c, ...o }) => o)(obj)
// }

// console.log(myFunction({ a: 1, b: 7, c: 3 }))


// 2 - Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.
// function myFunction(a, b) {
//     for (const key in a) {
//         a[key] *= b
//     }
//     return a
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 }, 3))


// 3 - Write a function that takes a Set and a value as argument. If existing in the Set, remove the value from the Set. Return the result
// function myFunction(set, val) {
//     const s = new Set([1, 2, 3, 4, 5])
//     s.delete(10)
//     return s
// }

// console.log(myFunction(new Set([1, 2, 3]), 1))

// 4 - Write a function that takes an array of strings as argument. Return the longest string.
// function myFunction(arr) {
//     return arr.reduce((acc, cur) => {
//         return acc.length > cur.length ? acc : cur
//     })
// }

// console.log(myFunction(['I', 'need', 'candy']))

// 5 - Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
// function myFunction(arr) {
//     return arr.every(x => arr[0] === x);
// }

// console.log(myFunction([true, true, true, true]))

// 6 - Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. 
// It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. 
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// function myFunction(x, y) {
//     y.d = y.b
//     delete y.b
//     return ({ ...x, ...y })
// }

// console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))

// 7 - Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. 
// Return the object.

// function myFunction(a, b) {
//     let obj = {}

//     a.forEach((key, idx) => {
//         obj[key] = b[idx]
//     });

//     return obj;
// }

// console.log(myFunction(['a', 'b', 'c'], [1, 2, 3]))


// 8 - Write a function that takes an array of number as argunment, convert the array to an object it should have a key for each unique of the array
// the corresponding object value should be the number of times the key occurs witihn the array.

// function myFunction(a) {
//     return a.reduce((acc, cur) => {
//         if (cur in acc)
//             acc[cur]++
//         else
//             acc[cur] = 1
//         return acc
//     }, {})
// }

// console.log(myFunction([1, 2, 2, 3]))

// 9 - Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
// function myFunction(...arrays) {

//     return typeof arrays
// }

// console.log([1, 2, 3], [4, 5, 6])

