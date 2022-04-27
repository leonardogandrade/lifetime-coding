class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    cpf;
    sex = 'M';

    getSex() {
        return this.sex;
    }

    dress() {
        return 'dress some clothes.'
    }

    showInfo() {
        return {
            name: this.name,
            age: this.age,
        }
    }
}

class Woman extends Man {
    constructor(name, age, sex) {
        super(name, age, sex);
        this.sex = sex;
    }

    showInfo() {
        return {
            name: this.name,
            age: this.age,
            sex: this.sex,
        }
    }

}


const barbara = new Woman('Barbara', 33, 'F');
const leo = new Man('Leonardo', 39);
console.log(barbara.showInfo());
console.log(leo.showInfo());

