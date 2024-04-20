// Here is a JS Vanilla example:
// You can pass any kind of tyoe to the function

// function sayHello(name, message) {
//   return message;
// }

/**
 * Here we are defining a generic, in other words you are not
 * definig the type to the function, but leaving the type choice when
 * it should be called.
 */
function sayHello<S, N>(name: S, message: N): N {
  return message;
}

// Here we have to calls to the the same function with different parameters
const resp1 = sayHello<String, Number>("leonardo", 1);
console.log(resp1);
const resp2 = sayHello<String, String>("leonardo", "1");
console.log(resp2);
