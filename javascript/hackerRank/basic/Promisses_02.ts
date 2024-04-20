// 1 - criar uma funcao resolve reject
// 2 - criar funcao verica par
// 3 - criar funcao trata erro
// quando numero for menor módulo de 10 resolve a promessa,
// se o numero for par

const THRESHOLD = 8;

function getNumber(resolve: any, reject: any) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;

    if (value < THRESHOLD) {
      resolve(value);
    } else {
      reject(value);
    }
  }, 250);
}

function isEven(value: any) {
  const even = value % 2 === 0;
  return {
    value,
    even,
  };
}

function throuble(reason: any) {
  console.error(reason);
  throw new Error(`my error: ${reason}`);
}

function getWord(isEvenInfo: any) {
  return new Promise((resolve, reject) => {
    const { value, even } = isEvenInfo;
    if (value >= THRESHOLD - 1) {
      reject(`too large ${value}`);
    } else {
      isEvenInfo.evenWord = isEvenInfo.even ? "even" : "odd";
      resolve(isEvenInfo);
    }
  });
}

new Promise(getNumber)
  .then(isEven, throuble)
  .then(getWord)
  .then((info: any) => {
    console.log(`Got: ${info.value}, is: ${info.evenWord}`);
  })
  .catch((reason) => {
    console.log(reason);
  });
