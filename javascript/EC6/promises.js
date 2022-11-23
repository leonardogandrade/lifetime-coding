function getLetter() {
    const sentence = 'abcdefghijklmnopqrstuvxz';
    let key = Math.floor(Math.random() * 3)

    return sentence[key]
}

const promise = new Promise((resolve, reject) => {
    const vowel = new Set(['a', 'e', 'i', 'o', 'u'])

    if (vowel.has(getLetter()))
        resolve('a vowel was found.');
    else
        reject('it is a consonant.');

});

promise.then((e) => {
    console.log(e);
}).catch((err) => {
    console.log(err);
}).finally(e => {
    console.log('Promise was executed.')
})