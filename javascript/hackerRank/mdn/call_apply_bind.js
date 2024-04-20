
const user1 = {
    id: 1,
    name: "user1",
    hello: function () {
        console.log(`hello ${this.user1} and id: ${this.id}`)
    }
}

const user2 = {
    id: 2,
    name: "user2",
    hello: function (greeting) {
        const [greet, sufix] = greeting
        console.log(`${greet} ${sufix} ${this.name} and id: ${this.id}`)
    }
}

user2.hello.call(user1, ["Hello", "mr."])

const hello2 = user2.hello.bind({ id: "008", name: "leo" }, ["Hello", "ms."])
hello2()
