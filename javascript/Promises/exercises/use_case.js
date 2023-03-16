function central(id) {
    return new Promise((resolve, reject) => {
        if (id <= 10 && id >= 0)
            resolve({ id: id, dbname: 'db1' })
        if (id > 10 && id <= 30)
            resolve({ id: id, dbname: 'db2' })
        else
            reject('id not found')
    })
}

function db1(id) {
    return new Promise((resolve, reject) => {
        if ([2, 4, 6, 8].includes(id))
            return setTimeout(() => {
                resolve({
                    id: id,
                    username: 'leo',
                    country: 'Brazil'
                })
            }, 0);
        // throw new Error('db error')
    })
}

function db2(id) {
    return new Promise((resolve, reject) => {
        if ([12, 13, 14, 16, 18].includes(id))
            return setTimeout(() => {
                resolve({
                    username: 'Barbara',
                    country: 'England'
                })
            }, 0);
        // throw new Error('db error')
    })
}

function vault(id) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            if ([2, 4, 6, 8, 10, 12].includes(id))
                resolve({
                    firstname: 'encrypted_firstname',
                    lastname: 'encrypted_lastname'
                })
            // throw new Error('vault error xpto')
        }, 0);
    })
}

function mark(id) {
    return new Promise((resolve, reject) => {
        const rand_number = Math.floor(Math.random() * 10 + 1)

        // if (Math.abs(rand_number - id) < 3)
        resolve('marked')
        // reject('mark error')
    })
}

// ################## SOLUTION ##################

const dbs = {
    db1: db1,
    db2: db2,
}

const person_id = 12

const all_promises = Promise.all([
    central(person_id)

        .catch(() => {
            return Promise.reject('Error central')
        })

        .then(function (db) {
            console.log('CENTRAL:\t', db.dbname)

            return dbs[db.dbname](db.id)
                .catch(err => {
                    console.log('DB: \t\t', err.name, db.dbname) // person_id over than 20
                })
        }),

    vault(person_id).catch(error => Promise.reject('Error vault'))
]).then(function (data) {
    console.log(data)
})

// central(12)
//     .then((resolve, reject) => {
//         console.log('CENTRAL:\t', resolve)
//         switch (resolve.db) {
//             case 'bd1':
//                 return bd1(resolve.id)
//             case 'bd2':
//                 return bd2(resolve.id)
//         }
//     })
//     .then((resolve, reject) => {
//         console.log('BD:\t\t', resolve)
//         return vault(resolve.id)
//     })
//     .catch((resolve, reject) => {
//         console.log('VAULT\t', resolve)
//         return mark(resolve)
//     })
//     .then((resolve, reject) => {
//         console.log(resolve)
//     })