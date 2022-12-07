import input from "./input.js"

const rucksacks = input.split(`\n`).map(rucksack => {
    const first = rucksack.slice(0, rucksack.length / 2)
    const second = rucksack.slice(rucksack.length / 2)
    return [first, second]
})

const commonItems = rucksacks.map(rucksack => {
    const first = rucksack[0].split(``)
    const second = rucksack[1].split(``)
    return first.filter(item => second.includes(item))
}   
)

const priorities = commonItems.map(rucksack => {
    const item = rucksack[0]
    const code = item.charCodeAt(0)
    if (code >= 97 && code <= 122) {
        return code - 96
    } else {
        return code - 38
    }
})

const sum = priorities.reduce((a, b) => a + b, 0)

console.log(sum)

// part 2

const bags = input.split('\n')


const combinedBags = []
for(let i = 0; i < bags.length; i += 3) {
    combinedBags.push([bags[i], bags[i + 1], bags[i + 2]])
}

const commonItems2 = combinedBags.map(bag => {
    const first = bag[0].split('')
    const second = bag[1].split('')
    const third = bag[2].split('')
    return first.filter(item => second.includes(item) && third.includes(item))[0]
})

const priorities2 = commonItems2.map(bag => {
    const item = bag
    const code = item.charCodeAt(0)
    if (code >= 97 && code <= 122) {
        return code - 96
    } else {
        return code - 38
    }
}
)

const sum2 = priorities2.reduce((a, b) => a + b, 0)

console.log(sum2)



