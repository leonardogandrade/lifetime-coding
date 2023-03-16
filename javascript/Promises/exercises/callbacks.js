// ########################
// 
// FROM CALLBACK TO PROMISE
// 


// Callback
function watch_callback(value, callback, callback_error) {
    const rand_number = Math.floor(Math.random() * 10 + 1)

    if (Math.abs(rand_number - value) > 2) {
        callback({
            msg: 'success'
        })
    } else {
        callback_error({
            msg: 'fail'
        })
    }
}

watch_callback(10, message => {
    console.log(message)
}, error => console.log(error))


// Promise
function watch_callback_promise(value) {
    const rand_number = Math.floor(Math.random() * 10 + 1)

    return new Promise((resolve, reject) => {
        if (Math.abs(rand_number - value) > 2)
            resolve({ msg: 'success' })
        else {
            setTimeout(() => {
                reject({ msg: 'fail' })
            }, 2000);
        }

    })
}

// watch_callback_promise(10).then(message => {
//     console.log(message)
// }).catch(
//     error => console.log(error)
// )
