// -------Map and set

let myMap = new Map()

myMap.set(1, 'num1') //a numeric key
myMap.set('1', 'str1')// a string key
myMap.set(true, 'bool1')// a boolean key

console.log(myMap)

console.log(myMap.get(1))
console.log(myMap.get('1'))

console.log(myMap.size)

myMap.delete('1')

myMap.clear()

myMap.set('1', 'str1').set(1, 'num1').set(true, 'bool1')
console.log(myMap)


let fruitMap = new Map([
    ['banana', 40],
    ['kiwi', 150],
    ['apple', 60]
])

for (let item of fruitMap) {
    console.log(item)
    console.log('key is', item[0], '& ', 'value is', item[1])
}

console.log(fruitMap.values())
console.log(fruitMap.keys())

let valueArray = Array.from(fruitMap.values())
let keyArray = Array.from(fruitMap.keys())

console.log(valueArray)
console.log(keyArray)

for (let item of fruitMap.keys()) {
    console.log(item)
}
for (let item of fruitMap.values()) {
    console.log(item)
}


fruitMap.forEach((value, key) => {
    console.log(value, key)
})
