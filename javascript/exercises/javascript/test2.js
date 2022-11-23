const result = function myFunction(arr) {
    return arr.reduce((acc, cur) => {
        let firstLetter = cur[0]

        if (!acc[firstLetter])
            acc[firstLetter] = []

        acc[firstLetter].push(cur)

        return acc

    }, {})
}

console.log(result(['Alice', 'Alfred', 'Ben']))