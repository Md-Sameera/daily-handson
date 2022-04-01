/ let arr = [1, 2, 3, 4, 5]

// ----------includes()

 console.log(arr.includes(2))


// -----------------lastIndexOf

let fruits = ['banana', 'orange', 'apple', 'banana', 'kiwi', 'banana']
console.log(fruits.lastIndexOf('banana'))


// ------------findIndex
let arr = [1, 5, 3, 4, 5, 6, 7, 8]
let result = arr.findIndex(cb)

// function greaterThan4(element) { //returns a boolean value
//     return element > 4
// }

let resul= arr.findIndex(greaterThan4)

console.log(resul)


// -----------CONCAT
let arr1 = ['a', 'b', 'c']
 let arr2 = ['d', 'e']
let arr3 = arr1.concat(arr2)
console.log(arr3)



// -------------toString

onst arr123 = [1, 2, 'a', '1a'];
let result = arr.toString()
console.log(result)



// -------JOIN

let fruits = ['apple', 'banana', 'orange']

let result = fruits.join('-')
let result = fruits.join('')
let result = fruits.join(' ')
let result = fruits.join()

console.log(result)



// -----------SOME

let arr = [1, 2, 3, 4, 5]


function isEven(element) { //testing condition
    return element % 2 === 0
}

let result = arr.some(isEven)
let result = arr.some(function (element) {
    return element % 2 === 0
})
let result = arr.some((element) => {
    return element % 2 === 0
})

// let result = arr.some(element => element % 2 === 0)
// console.log(result)


// -------------EVERY - returns true if EVERY element of the array satisfies the given condition

let arr = [1, 2, 3, 4, 5]

console.log(arr.some(y => y < 2)) //true
console.log(arr.every(y => y < 6)) //true



// ------------FILTER - returns a new array WITH the elements that satisfy the given condition

let arr = [1, 2, 3, 4, 5]

function isGreaterThan3(element) {
    return element > 3
}

let resultArray = arr.filter(element => element >= 3)

console.log(resultArray)



// ----------Map

// returns a new array populated with the results of the callback function

let arr = [1, 2, 3, 4, 5]

function double(item) {
    return item * 2
}

let newArr = arr.map(double)
let newArr = arr.map(element => element * 2)
console.log(newArr)


let arr1 = [1, 2, 3, 4, 5]
let arr2 = [10, 9, 8]

let newArr1 = arr1.map(item => item * item)
let newArr2 = arr2.map(item => item * item)

console.log(newArr1, newArr2)
