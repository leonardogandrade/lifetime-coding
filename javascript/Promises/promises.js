// Here we fullfill an array using promises
// 

function waitThenSay(milliseconds, message) {
    return new Promise(resolve => {
        console.log(`waiting to say: "${message}"...`)
        setTimeout(() => {
            // log to console for immediate side-effect
            console.log(message.toUpperCase() + '!');
            // also resolve with the message
            resolve(message);
        }, milliseconds);
    });
}

console.log('this is run first');

// tasks is an array of functions that return promises
const tasks = [];

for (let i = 1; i <= 3; i += 1) {
    tasks.push(() => waitThenSay(i * 2000, `hello from task ${i}`));
}

console.log('this is run second');

// execute the tasks by mapping each function to their invocation
const arrayOfPromises = tasks.map(task => task())

// call Promise.all on that array
Promise.all(arrayOfPromises).then(result => {
    console.log({ result });
});