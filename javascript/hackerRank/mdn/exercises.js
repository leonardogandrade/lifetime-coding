const prices = { 'Floratta': 60, 'Malbec': 210, 'Uomini': 33 }

function CalcPrice(data) {
    let total = 0;
    for (item of data) {
        if (item[0] === "Malbec" && item[1] >= 2) {
            total += prices[item[0]] * item[1] - (prices[item[0]] * item[1] * 0.2)
        } else if (item[0] === "Floratta") {
            total += prices[item[0]] * Math.ceil(item[1] / 2)
        }
        else {
            total += prices[item[0]] * item[1]
        }
    }
    return total;
}

const result = CalcPrice([['Floratta', 7], ['Malbec', 7], ['Uomini', 7]]);
console.log(result);

// [['Floratta', 1], ['Malbec', 1], ['Uomini', 1]]
// [['Floratta', 2], ['Malbec', 2], ['Uomini', 1]]
// [['Uomini', 2], ['Floratta', 3], ['Malbec', 5]]
// [['Floratta', 7], ['Malbec', 7], ['Uomini', 7]]