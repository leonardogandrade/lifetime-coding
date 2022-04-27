const { insert_sort } = require('../data-structures/sorting/sorting_algorithms');

let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let expected_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Tests for insert sort algorithm.', () => {

    it('should return ascending order array', () => {
        expect(insert_sort(array)).toMatchObject(expected_array)
    });

    it('should return error cause neither all elements are numbers', () => {
        let array_letter = [9, 8, 'A', 6, 5, 4, 3, 2, 1]
        expect(() => {
            insert_sort(array_letter)
        }).toThrow('element is not a number.')
    });
});
