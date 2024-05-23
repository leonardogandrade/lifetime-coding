process.on('message', (msg) => {
    console.log('Mensagem do pai:', msg);
});

let counter = 0;

setInterval(() => {
    process.send({ counter: counter++ });
}, 1000);