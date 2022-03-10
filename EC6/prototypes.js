const animal = function () { }

const dog = animal
dog.prototype = new dog();
dog.prototype.breed = 'golden retriever';

const chico = new dog();
console.log(chico.breed)