// Promise.race as their own name suggests is a race between an array of promises
// which one was more fast, and cross the line first will be showed.

function random_value_sum(value) {
    const rand = Math.floor(Math.random() * 10 + 1)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + rand)
        }, rand);
    })
}

Promise.race([random_value_sum(2), random_value_sum(4)]).then(result => console.log(result))