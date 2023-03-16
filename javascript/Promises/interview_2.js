// // run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

// // TODO: write a function to compare two objects in JS without any library.

// function compare(obj1, obj2) {
//   const x = [1, 2, 3, 4, 5].sort();
//   const y = [2, 4, 5, 6, 7].sort();

//   if (x.length === y.length)
//     x.forEach((value, index) => {
//       value === y[index];
//     });

//   if (
//     Object.keys(obj1) === Object.keys(obj2) &&
//     Object.values(obj1) === Object.values(obj2)
//   )
//     return true;
//   return false;
// }

// const a = {
//   id: 1,
//   title: 'iPhone 9',
//   owner: {
//     name: 'dan',
//     address: {
//       city: 'New York ',
//     },
//   },
// };

// const b = {
//   title: 'iPhone 10',
//   id: 1,
//   owner: {
//     name: 'dan',
//     address: {
//       city: 'New York ',
//     },
//   },
// };

// const c = {
//   title: 'iPhone 9',
//   id: 1,
//   owner: {
//     name: 'dan',
//     address: {
//       city: 'New York ',
//     },
//   },
// };

// console.log(compare(a, c) === true);
// console.log(compare(a, b) === false);
// console.log(compare(b, c) === false);

// //

// function generateRandomValue() {
//   const valx = Math.floor(Math.random() * 10 + 1);
//   return new Promise((resolv, reject) => {
//     setTimeout(() => {
//       const y = Math.floor(Math.random() * 10 + 1);
//       // console.log('--->>>y', y);
//       return y;
//     }, valx * 100);
//   });
// }

// let array = [];

// for (let i = 1; i < 6; i++) {
//   array.push(generateRandomValue());
// }

// const _ = require('lodash')

// const obj1 = {
//     id: 1,
//     name: 'leo',
//     experience: {
//         python: 2,
//         js: 2,
//         java: 1
//     },
//     age: 40
// }

// const obj2 = {
//     name: 'leo',
//     id: 1,
//     experience: {
//         python: 2,
//         js: 2,
//         java: 1
//     },
//     age: 40
// }

// // console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
// console.log(_.isEqual(obj1, obj2))


// function generateRandomValue() {
//     return new Promise((resolv, reject) => {
//         const valx = Math.floor(Math.random() * 10 + 1);

//         setTimeout(() => {
//             const y = Math.floor(Math.random() * 10 + 1);
//             // console.log('--->>>y', y);
//             resolv(y)
//         }, valx * 100)
//     })
// }



// function mount_array() {
//     let array = []
//     for (let i = 1; i <= 5; i++) {
//         generateRandomValue().then((resolv, reject) => {
//             array.push(resolv)
//             // console.log(array)
//         })
//     }
//     console.log(array)
// }

// const result = mount_array()
// console.log(result)

const getRandomNumber = () => {
    const x = Math.floor(Math.random() * 10 + 1)
    return new Promise((resolv, reject) => {
        setTimeout(() => {
            const y = Math.floor(Math.random() * 10 + 1)
            resolv(y)
        }, x);
    })
}

const allValues = []

for (let i = 0; i < 5; i++) {
    allValues.push(getRandomNumber())
}

Promise.all(allValues).then((resolv, reject) => console.log(resolv))
