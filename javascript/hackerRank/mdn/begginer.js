/**
* 1 - VARIABLE CLASSIFICATION
* All variables declared without a value are UNDEFINED
* Ex:
* let x <- x === undefined
* undefined can be used a bollean comparative
* Ex:
* x === undefined ? console.log("UNDEFINED") : console.log(`${x}`)
* in math context undefined is NaN
* ex: x + 2 <- NaN
*/

/**
 * Arrays declared can be verified using undefined 
 * Ex:
 * let data = Array();
 * data[0] === undefined ? console.log("undefined") : console.log(data[0]);
 */

/**
 * 2 - SCOPE
 * Each variable in Js belongs to a block scope after ECMAScript 6
 * using var declaration you are in global scope of you block
 * Ex:
 * function fn1() {
    if (true) {
        var x = 5
    }
    console.log(x)
}

fn1()

-> The example above x are in the block scope of fn1 function and in the GLOBAL scope of the block
 */

/**
 * 3 - HOISTING
 * var declarations are hoisted and functions. let and const are't
 * Ex:
 * 
        console.log(fn1());
        console.log(x);

        function fn1() {
            return 10;
        }

        var x = 10;
 */


/**
 * 4 - CLOSURES
 * When we have nested fucntions, it is a closure.
 */

function outside(external) {
    function inside(internal) {
        var external = 100;
        console.log(external)
    }
    inside(10)
    console.log(external)
}

// outside(20);

function A(x) {
    const m = 10
    function B(y) {
        function C(z) {
            return x + y + z * m;
        }
        return C(1);
    }
    return B(2);
}

// console.log(A(3))

const double = function (number) {
    const doubled = function () {
        return number * 2;
    }
    return doubled; // 
}

// const result = double(2)
// console.log(result())

function addPerson(name) {
    let gender;
    return {
        setName: function (newName) {
            name = newName
        },
        getName: function () {
            return name;
        },
        setGender: function (newGender) {
            if (typeof newGender === "string" && ["male", "female"].includes(newGender)) {
                gender = newGender;
            } else {
                throw Error("wrong gender description.")
            }
        },
        getGender: () => {
            return gender;
        }
    }
}

// const person1 = addPerson("leonrdo");
// person1.setName("Gerheim")
// console.log(person1.getName());
// person1.setGender("male");
// console.log(person1.getGender());

/**
 * 5 - ARGUMENTS
 * inside a function all the arguments are stored in a special ARRAY called arguments
 * function args(x){
 *     console.log(arguments)
 * }
 * args('a', 'b', 'c')
 */


function myConcat(a, c, d) {
    for (let idx = 1; idx < arguments.length; idx++) {
        console.log(arguments[idx])
    }
}

// const result = myConcat(", ", "red", "orange", "blue");
// const data = [1, 2, 3, 4, 5]
// console.log(typeof data)

/**
 * 6 - REST OPERATOR
 */

function rest(multiplier, ...rest) {
    return rest.reduce((acc, cur) => (
        acc + cur * multiplier
    ), 0)
}

// console.log(rest(7, 2, 3, 4, 5, 6, 7))

/**
 * 7 - ARROW FUNCTIONS
 * Arrow function has the this statement, which represents the object of that scope
 */

const result = (name, ...numbers) => {
    this.name = name;
    this.arr = numbers

    return this;
}

// console.log(result("leo", 1, 2, 3, 4, 5))


const Pessoa = () => {
    let self = this;
    self.count = 1;

    setTimeout(() => {
        self.count += 10;
        self.name = "leo"
        console.log(self)
    }, 2000);

    return self;
}

// const p = Pessoa();
// console.log(p)

/**
 * 8 - Date
 */

const start = new Date("2024-02-12:10:00:00");
const end = new Date("2024-02-12:12:00:00");
const diff = end.getTime() - start.getTime();

// console.log(diff / (1000 * 3600))

/**
 * 9 - REGULAR EXPRESSIONS
 */

const re = /bo*?3/

//const res = "b_ooobooooo3".match(re)
//console.log(res)

/**
 * 10 - PROTOTYPE
 */


function Mulher() {
    this.name = "Barbara";
    this.surname = "Ucelis";
}

const p1 = new Mulher();
// console.log(p1.name)
//console.log(p1.surname)

Mulher.prototype.age = 35;
//console.log(p1.age)

Mulher.prototype.hello = () => {
    console.log(`hello I am ${p1.name}`)
}

/**
 * 11 - CALL | APPLY
 * Allow us to change the this object of a function or object
 * the example below show us how to create a generic function Product
 * after that a spacifc one called mobile and change the this object of the first one
 * We can create an object using the prototype property
 * The difference between each other is that call accepts a separated list of parameters and apply an array of parameters [].
 *  
 */


function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Mobile(name, price) {
    Product.apply(this, [name, price])
    return { name: this.name, price: this.price }
}

Mobile.prototype = Object.create(Product.prototype);
// const mobile = new Mobile("Samsung S20 FE", 2200);
// console.log(mobile);

// Ex 2:
// Here 
var nums = [1, 2, 3];
var _nums = [10, 20, 30];

nums.push.apply(nums, [4, 5, 6])
// console.log(nums)

/**
 * 12 - BIND
 * Creates a function's copy and replace the THIS object for the new one provided
 */

const myModule = Object.create({
    value: 10,
    double: function () {
        console.log(`Doubled: ${this.value * 2} - params: ${Array.prototype.arguments}`)
    }
});

this.value = 20

// const binded = myModule.double.bind(this, [10, 20], 30)
// binded()

function fn1() {
    console.log([1, 2, 3, 4, 5].slice(0, 2))
}

// fn1(1, 2, 3)

const arr1 = [1, 2, 3, [4], [[5, 6], [7, 8, 9, [10, 11]]]];

const arr2 = arr1.flat(Infinity).splice(0, 4);
console.log(arr2)