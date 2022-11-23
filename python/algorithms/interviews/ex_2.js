class Dictionary {
    convert(array) {
        let dictionary = array.reduce((acc, value) => {
            acc[value] = value
            return acc
        })
    }
}