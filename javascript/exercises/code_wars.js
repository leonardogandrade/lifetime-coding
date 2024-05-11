// Convert snake case to camel case

function toCamelCase(str) {
  let sentence = str.split(/[-_]/);
  let finalSentence = [];

  finalSentence.push(sentence[0]);

  for (let i = 1; i < sentence.length; i++) {
    finalSentence.push(sentence[i][0].toUpperCase() + sentence[i].slice(1));
  }

  return finalSentence.join("");
}

// const _result = toCamelCase("the-stealth-warrior");
// console.log(_result);

function digitalRoot(n) {
  if (n <= 9) {
    return n;
  }

  let splited = String(n).split("").map(element => parseInt(element));
  let summed = splited.reduce((acc, cur) => (
    acc += cur
  ));

  return digitalRoot(summed);

}

// const result = digitalRoot(493193);
// console.log(result)

const objs = [
  { name: "aaa", age: 21, children: 1 },
  { name: "bbb", age: 22, children: 2 },
  { name: "ccc", age: 23, children: 3 },
  { name: "ddd", age: 24 }
];

for (let item of objs) {
  if (!Object.keys(item).includes("children")) {
    item.children = null;
  }
}

// console.log(objs)

/**
 * Return a string with the sequence number of the letters in a English alphabet.
 * @param {string} text 
 * @returns string
 */
function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = ""

  for (let letter of text.toLowerCase().trim()) {
    alphabet.indexOf(letter) != -1 ? result += (alphabet.indexOf(letter) + 1 + " ") : ""
  }
  return result.trimEnd();
}

// const result = alphabetPosition("The sunset sets at twelve o' clock.");
// console.log(result);

function solution(number) {
  let multiples = 0;

  for (let n = 1; n < number; n++) {
    n % 3 === 0 || n % 5 === 0 ? multiples += n : null
  }
  return multiples;
}

const _result = solution(10);
console.log(_result);