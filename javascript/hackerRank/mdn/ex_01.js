// https://coderbyte.com/results/gaussretriever:Codeland%20Username%20Validation:JavaScript

function CodelandUsernameValidation(str) {
    let valid = false;
    const pattern1 = /^[a-zA-Z]\w+[a-zA-Z]$/g;

    str.length >= 4 && str.length <= 25 ? valid = true : valid = false;
    str.match(pattern1) !== null ? valid = true : valid = false;

    return str.match(pattern1)
}

//console.log(CodelandUsernameValidation("leon1a_rdo"));


