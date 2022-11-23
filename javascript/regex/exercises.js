// Question 1 - Easy
const sentence = 'aa_';

function myMatch(str) {
    const pattern = /^[A-Z][0-9a-z_]*[^_]$/gi
    const found = str.match(pattern)

    if (str.length >= 5 && str.length <= 25 && str.match(pattern) !== null)
        return true
    return false
}

// console.log(myMatch(sentence))

// Question 2 - Easy
// My score 9
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, 
// and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should 
// return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, 
// then your program should return false as well. 
// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, 
// and 3 question marks between 5 and 5 at the end of the string.

function questionMarks(str) {
    const pattern = /[0-9]\?{3}[0-9]/gi
    let questionMarkControl = false;
    let control = false;

    if (str.match(pattern) !== null)
        questionMarkControl = true;

    const arr = str.match(/[0-9]/gi)

    if (arr != null) {
        arr.reduce((acc, cur) => {
            if (parseInt(acc) + parseInt(cur) === 10 && !control)
                control = true
        })
    }

    if (control || questionMarkControl)
        return true

    return false;
}

// Question 3 - Easy
// My score
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

// Examples
// Input: "fun&!! time" 
// Output: time
// Input: "I love dogs" 
// Output: love


function longest(sen) {
    const sen_ = sen.replace(/\W{1,}/g, ';');
    arr = sen_.split(';');

    return arr.reduce((acc, cur) => {
        return cur.length > acc.length ? cur : acc
    })
}


// console.log(longest("123456789 98765432"));


function FindIntersection(strArr) {
    // code goes here  
    let answer = "";
    const arr1 = Array.from(strArr[0].split(',').map(item => item.trim()));
    const arr2 = Array.from(strArr[1].split(',').map(item => item.trim()));

    arr1.forEach(value => {
        arr2.includes(value) ? answer += value + ',' : ''
    })

    if (answer === "")
        return false

    return answer.replace(/,$/g, '');
}

// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));


// const arr = [...strArr[0], ...strArr[1]]
// const merged = Array.from(strArr[0].split(',')).concat(Array.from(strArr[1].split(','))).sort((a, b) => a - b)
// const set = new Set(merged)

// return Array.from(set.values());