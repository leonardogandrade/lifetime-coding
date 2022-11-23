class Api {
    constructor() {

    }

    request(value, callback) {
        const randomNumber = Math.floor(Math.random() * 3)

        if (typeof callback !== 'function')
            throw new Error('callback is not a function.')

        if (value === '')
            throw new Error('value is empty')

        if (!randomNumber)
            throw new Error('Not able to proceed request.')

        return
    }
}

class Main {
    constructor() {
        this.api = new Api()
    }

    request(value) {
        const api = this.api
        function requestAsPromise(val) {
            return new Promise((resolve, reject) => {
                api.request(val, (err) => err ? reject(err) : resolve())
            })
        }

        return requestAsPromise(value)
            .catch(rejected => { console.log(rejected) })
    }
}

const main = new Main();
main.request('leo')
