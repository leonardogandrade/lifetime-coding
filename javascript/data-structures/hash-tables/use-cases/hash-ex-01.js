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
        const key = this.hash(value);
        let index = 0;

        if (this.table[key] != undefined) {
            index = this.table[key].length;
        }

        this.table[key][index] = value;
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

    count_words(word) {
        const word_hash = this.hash(word);
        let total_word = 0;

        for (let w of this.table[word_hash]) {
            if (w === word)
                total_word++
        }

        return total_word;
    }

}


const fs = require('fs');

const raw_data = fs.readFileSync("words.txt", "utf-8");
const words = raw_data.replace(/(?:\r\n|\r|\n)/g, " ").trim().split(" ");

//console.log(words)

const hash_table = new HashTable();
hash_table.build_chains();

for (let word of words) {
    hash_table.put(word);
}

hash_table.showTable();

const word = 'English'
console.log(`It has founded: ${hash_table.count_words(word)} word(s): ${word}`)