// Promises
// Here we have a promise chain, i.e a promise return another one e so on
// the catch block is executed when a rejected promise was thrown
const fs = require('fs')

let chain_promises = job1()

chain_promises

    .then((resolv, reject) => {
        console.log(resolv)
        return job2()
    })

    .then((resolv, reject) => {
        console.log(resolv)
    })

    .then((resolv, reject) => {
        console.log('Hello')
    })

    .catch(reject => console.log(reject))


function job1(data) {
    return new Promise((resolv, reject) => {
        return setTimeout(() => {
            try {
                fs.readFileSync('test.txt')
            } catch (err) {
                reject(`File ${err.path} doesn't exist.`)
            }
            resolv('job1')
        }, 1000)
    })
}

function job2(data) {
    return new Promise((resolv, reject) => {
        return setTimeout(() => {

            resolv('job2')
        }, 1000)
    })
}