const my_name = 'Leo';

const greet = (name) => {
    console.log(`Hello ${name}`);
}

const sayHello = function (functionalArgument, name) {
    functionalArgument(name);
}

sayHello(greet, my_name);