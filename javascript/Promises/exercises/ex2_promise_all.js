// Promise all
// When you use Promise all you can only retrieve data if all the promisses were fullfilled
// In case you want to get data dispite one of then won't be fetched, you must use .catch statement

const { result } = require("lodash");

function job_error() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('job error')
            } catch (error) {
                reject(error.message)
            }
        }, 2000);
    })
}

function job_ok() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok')
        }, 2000);
    })
}


// Here the two promises are resolved, so all_promises has both values from each promise
var all_promises = Promise.all([job_ok().then(), job_ok().then()])
all_promises.then(result => console.log(result))

// Here the second promise thrown an error, threrefore all_promises can't fetch any of then
var all_promises = Promise.all([job_ok().then(), job_error().then()])
all_promises.then(result => console.log(result))

// Using .catch statement is possible to execute both of then, and if one failed the other one will
// be executed anyway
var all_promises = Promise.all([job_ok().catch(() => { }), job_error().catch(() => { })])
all_promises.then(result => console.log(result))