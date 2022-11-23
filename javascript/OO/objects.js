const person = {
    'name': '',
    'cpf': '',
    'birthday': '1983-02-14',
    'age': function () {
        const bd = new Date(this.birthday);
        const now = new Date(Date.now())
        return now.getFullYear() - bd.getFullYear()
    },
}

const leo = Object.create(person)
leo.name = 'Leonardo'
leo.cpf = '063.499.816-18'
leo.birthday = '1983-02-14'
console.log(leo.age())