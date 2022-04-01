
let arr = [1, 2, 3, 4, 5] //Question - return a new array which adds 5 to each element

let newArr = arr.map(e => e + 5)

console.log(newArr)


// -------FOREACH - executes a provided function once for EACH element in the array

let arr = [1, 2, 3, 4, 5]
arr.forEach(item => {
    console.log(item * 2)
})

// using forEach calculate the sum of elements in arr
let arr = [1, 2, 3, 4, 5]

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)

let sum = 0
arr.forEach(item => {
    sum += item //sum = sum + item
})

console.log(sum)


// ---------------REDUCE ----- returns a single value
// accumulator, current, initial value


let arr = [1, 2, 3, 4, 5]

let initialValue = 0
let result = arr.reduce(function (accumulator, current) {
    accumulator = accumulator + current //accumulator += current
    return accumulator
}, initialValue)

console.log(result)



let arr = [1, 2, 3, 4, 5]

let squaredArr = arr.map(item => item * item) //squaring arr

let evenSquares = squaredArr.filter(item => item % 2 === 0) //filtering out even values

let sumOfEvenSquares = evenSquares.reduce((acc, curr) => {
    acc += curr
    return acc
}, 0)

console.log(sumOfEvenSquares)

// FILTER MAP AND REDUCE ARE CHAINABLE
let sumOfEvenSquares = arr.map(item => item * item).filter(item => item % 2 === 0).reduce((acc, curr) => {
    acc += curr
    return acc
}, 0)

console.log(sumOfEvenSquares)

let salary = [100, 200, 300, 400, 500, 600]

filter out salaries greater than 300

double the filtered salaries

find out the total salary
