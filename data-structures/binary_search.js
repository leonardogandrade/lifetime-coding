const data = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
//const data = Array.from({ length: 100000 }, (v, k) => k)

const showSteps = (info) => {
    console.log(`Round: ${info.rounds} -> Low limit: ${info.lowLimit}, Middle: ${info.middleLimit}, High limit: ${info.highLimit}, Current: ${info.curretElement}`)
}

const binarySearchIterative = (element2BeFound, data) => {
    let found = false;
    let rounds = 0;
    let lowLimit = 0;
    let highLimit = data.length - 1;
    let middleLimit = Math.trunc(((highLimit + lowLimit) / 2));

    while (!found) {
        let curretElement = data[middleLimit];

        // For a big array, comment this function call
        showSteps({
            lowLimit,
            middleLimit,
            highLimit,
            rounds,
            element2BeFound,
            curretElement
        });

        if (element2BeFound > data[middleLimit]) {
            lowLimit = middleLimit + 1;
            middleLimit = Math.trunc(((highLimit + lowLimit) / 2));
        } else if (element2BeFound < data[middleLimit]) {
            highLimit = middleLimit;
            middleLimit = Math.trunc(((highLimit + lowLimit) / 2));
        } else if (element2BeFound === data[middleLimit]) {
            found = true;
            console.log(`Element was found on array position ${middleLimit}`);
        }

        rounds++;

        if (lowLimit === highLimit) {
            found = true;
            console.log('Element not found.')
        }
    }
}

const element = parseInt(process.argv.slice(2));

if (isNaN(element)) {
    console.log('Please make sure type a number to be searched after the module name.')
} else {
    binarySearchIterative(element, data);
}
