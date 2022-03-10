class Person {
    constructor(name = '', age = '', sex = '') {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    set setName(name) {
        this.name = name
    }

    get getName() {
        return this.name;
    }

    set setAge(age) {
        this.age = age
    }

    get getAge() {
        return this.age;
    }
}

const Marie = new Person();
Marie.setName = 'Marie';
Marie.setAge = 33;
console.log(Marie.getName, Marie.getAge)