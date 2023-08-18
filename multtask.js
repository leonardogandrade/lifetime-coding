// process.env.UV_THREADPOOL_SIZE = 5
const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

function doRequest() {
    https.request('https://thready.com.br', res => {
        res.on('data', () => { })
        res.on('end', () => {
            console.log(`Rq: ${Date.now() - start}`);
        })
    }).end()
}

function doCrypto() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hs: ${Date.now() - start}`)
    })
}

doRequest();

fs.readFile('multtask.js', () => {
    console.log(`FS: ${Date.now() - start}`)
});

doCrypto();
doCrypto();
doCrypto();
doCrypto();
