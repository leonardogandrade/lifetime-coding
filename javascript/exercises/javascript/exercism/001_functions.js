// 1
function cookingStatus(timer) {
    if (timer === 0)
        return 'Lasagna is done.'
    else if (typeof (timer) === 'undefined')
        return 'You forgot to set the timer.'
    else
        return 'Not done, please wait.'

}

// console.log(cookingStatus())

//  2
function preparationTime(layers, time = 2) {
    return time * layers.length
}

// console.log(preparationTime([]))

// 3
function quantities(layers) {
    let result = layers.reduce((acc, cur) => {
        if (cur === 'noodles')
            acc[cur] += 1 * 50
        else if (cur === 'sauce')
            acc[cur] += 1 * 0.2

        return acc
    }, { 'noodles': 0, 'sauce': 0 })

    return {
        'noodles': parseFloat(result.noodles.toFixed(2)),
        'sauce': parseFloat(result.sauce.toFixed(2))
    }
}

const noNoodles = ['sauce', 'béchamel', 'sauce', 'meat', 'sauce'];
// console.log(quantities(noNoodles))

// 4
function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

const friendsList = ['sauce', 'noodles', 'béchamel', 'marjoram'];
const myList = ['sauce', 'noodles', 'meat', 'tomatoes'];

addSecretIngredient(friendsList, myList);

// console.log(friendsList)
// console.log(myList)

const recipe = {
    'sauce': 0.6,
    'noodles': 300,
    'carrots': 1,
    'mozzarella': 0.5,
    'ricotta': 50,
    'béchamel': 0.1,
    'tofu': 100,
}

// 5
function scaleRecipe(recipe, portions) {
    let recipeResult = {}

    Object.entries(recipe).forEach(([key, value]) => {
        if (portions > 2)
            recipeResult[key] = parseFloat(((value / 2) * portions).toFixed(2))
        else if (portions === 1)
            recipeResult[key] = parseFloat(value / 2)
    })

    return recipeResult

}

const result = scaleRecipe(recipe, 3)
// console.log(result)

const x = ['a', 'b', 'c', 'a']

const res = x.reduce((acc, cur) => {
    if (cur in acc)
        acc[cur]++
    else
        acc[cur] = 1
    return acc
}, {})

console.log(res)