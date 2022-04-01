//  String methods
// -------indexOf()
str = 'Widget with id'

console.log(str.indexOf('with')) //7
console.log(str.indexOf('id')) //1
console.log(str.indexOf('t', 3)) //1
console.log(str.indexOf('widget'))//-1 
console.log(str.indexOf('Widget'))//0


// -----------includes() - returns a boolean value
let str1 = "Widget"

console.log(str1.includes("id"))//true
console.log(str1.includes("id", 2))//false


// ---------slice()
let str2 = "stringify"

// console.log(str2.slice(0,5)) //strin

// console.log(str2.slice(0, 1)) //'s'
console.log(str2.slice(2)) //ringify
console.log(str2.slice(-4, -1)) //


// -----------substring()

let str3 = 'stringify'

console.log(str3.substring(2, 6)) //ring

// --------split works on strings

let greeting = 'Hi how are you'

let resultArr = greeting.split('o') // ['Hi h', 'w are y', 'u']

console.log(resultArr)

console.log(resultArr.join('-'))

let example = 'what*are*you*doing'
let result = example.split('*')
// console.log(example.split('*'))
console.log(result.join(' '))

let str = "Vijay Pratap Singh"
let resultArr = str.split(' ')
// console.log(resultArr)
console.log(resultArr.join('\n'))

let str = "what*are*you*doing"
console.log(str.split('*').join('-')) //chainable

let arr = [1, 2, 3, 4]
console.log(arr.reverse())


let greeting = "Hi how are you" // -> you are how Hi

console.log(greeting.split(' ').reverse().join(' '))

let str = 'Hello' // -> olleH
let revStr = ''
for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i]
}

console.log(revStr)


// replace(), replaceAll()
const temp = 'John is a good guy. John is working as a developer'

console.log(temp.replace('John', 'Rahul')) //replaces only the first occurence
console.log(temp.replaceAll('John', 'Rahul')) //replaces all occurences

console.log(temp.split(' ').join('-'))
const arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)
temp = 'orange'
console.log(temp)
let str = 'apple'
str = 'orange'
console.log(str)



// trim()
let str = '                   Rahul - - - - -          **** Sharma                    '
console.log(str.trim())


let str = 'hello'
let str1 = 'HELLO'
// // toUpperCase(), toLowerCase
console.log(str.toUpperCase())
console.log(str1.toLowerCase())

let str = '12323' 
let num = 12323

console.log(num == str, 'double') //true
console.log(num === str, 'triple') //false

