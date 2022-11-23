/**
 * The main goal is generates a random number and try to access the array at the position
 * in case the position exists return as a resolved promise otherwise return a reject promise
 * @returns {Promise}
 */
function myPromise() {
    const data = [1, 2, 3, 4, 5]
    const randomKey = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {
        if (!data[randomKey])
            return reject(new Error('Error reject'))

        return resolve(data[randomKey])
    });
}

myPromise()
    .then(resolved => { console.log(resolved) })
    .catch(rejected => console.log(rejected))

