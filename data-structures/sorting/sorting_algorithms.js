const insert_sort = (array) => {
    let minor_pos;
    let temp;

    for (i = 0; i < array.length; i++) {

        if (typeof (array[i]) != 'number')
            throw new Error('element is not a number.');

        let index = i;
        minor_pos = index;

        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[minor_pos]) {
                minor_pos = j;
            }
        }
        temp = array[index];
        array[index] = array[minor_pos];
        array[minor_pos] = temp;
    }
    return array;
}

module.exports = {
    insert_sort,
}