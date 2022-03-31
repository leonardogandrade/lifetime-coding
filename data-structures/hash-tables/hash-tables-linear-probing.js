class HashTable {
    table = new Array(137);

    hash(value) {
        typeof (value) == "number" ? value = value.toString() : value;
        const ceil = 37;
        let total = 0;

        for (let letter in value) {
            total += ceil * total + value.charCodeAt(letter);
        }

        total = total % this.table.length

        if (total < 0)
            total += this.table.length - 1;

        return parseInt(total);
    }

    betterHash(string) {
        const H = 37;
        var total = 0;

        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }

        total = total % this.table.length;

        if (total < 0) {
            total += this.table.length - 1;
        }

        return parseInt(total);
    }

    showTable() {
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i][0] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }

    put(value) {
        const hash = this.hash(value);
        let empty_position = false;
        let position = hash;

        if (this.table[hash] !== undefined) {
            while (!empty_position) {
                this.table[position + 1] === undefined ? empty_position = true : empty_position = false;
                position++;
            }
        }
        this.table[position] = value;
    }

    get(value) {
        const key = this.hash(value);
        return {
            key,
            value: this.table[key]
        };
    }

    build_chains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }

    print_header(title) {
        console.log(`************ ${title} ************`)
    }

}

// String hash

let hash_table_string = new HashTable();
hash_table_string.build_chains()
const someNames = ["David", "Jennifer", "Donnie", "Barbara", "Leo", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

// hash_table_string.table[81] = 'Leo';
// hash_table_string.table[82] = 'Barbara';

for (let name of someNames) {
    hash_table_string.put(name);
}

hash_table_string.print_header('STRINGS')
hash_table_string.showTable();

// Number hash

const hash_table_number = new HashTable();
hash_table_number.build_chains();

const someNumber = [1, 2, 2, 1, 3, 4, 5, 1, 2];

for (number of someNumber) {
    hash_table_number.put(number)
}

hash_table_number.print_header('NUMBERS')
hash_table_number.showTable();

hash_table_number.print_header('RETRIEVE')
console.log(hash_table_number.get(4));

