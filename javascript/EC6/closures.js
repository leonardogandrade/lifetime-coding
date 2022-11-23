function closure1() {
    console.log('First example when value of \'i\' in the parent function is accessible from the inner function console.log')
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, 0);
    }
}
closure1()

function closure2() {
    // using VAR each iteration the closure of i has its value change, not created a new cause var is a block scope, not function scope
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000);
    }
}
closure2()

function closure3() {
    // using VAR each iteration the closure of i has its value change, not created a new cause var is a block scope, not function scope
    for (var i = 0; i < 3; i++) {
        ((i) => {
            setTimeout(() => {
                console.log(i)
            }, 1000);
        })(i)
    }
}
closure3()