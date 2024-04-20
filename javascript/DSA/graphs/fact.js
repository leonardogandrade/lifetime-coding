const _module = {
    value1: 10,
    value2: 20,
    sum: function (params) { return this },
}

const sum = _module.sum(10, 20);
console.log(sum)