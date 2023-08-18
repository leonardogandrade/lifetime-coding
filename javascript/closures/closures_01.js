// Ex 1: 
// In this example you can call the function credits passing a value
// the very first time you call the credits function you receive ... 'initial credits' message
// afterwards you just receive the returning value from the annoimous function
// CLOSURE definition, closure is the ability to access lexical scope variables after a function is finished.

const credits = (value) => {
    let coins = value;
    console.log(`initial credits: ${coins}`)

    return () => {
        coins -= 1;
        if (coins < 1)
            console.log('you have no more credits.')
        else
            console.log(`actual credits: ${coins}`)
    }
}

const result = credits(3)
result()
result()
result()