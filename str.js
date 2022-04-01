// strings

// ways of writing strings in JS

let single = 'single-quote';
let double = "double-quote"

let backticks = `backtick-string`

let amount = 'One-Hundred'

let billMessage = `Please pay Rs ${amount} here` //template literal

console.log(billMessage)


let guestList = `Guests:
Rahul
Shubham
Abishek`

console.log(guestList)

let guestList = 'Guests:\n *Rahul\n *Shubham\n *Abishek'
console.log(guestList)


// multiple lines in the code BUT in the console it shows in a single line.
//better readability in code

let str = "Hello-\
I'm continuing in line2-\
this is line3"

console.log(str)


let str1 = "Hello\nWorld"
let str2 = `Hello
World`

console.log(str1 === str2) //true



escape characters
let str = 'Hello, how\'re you doing?'
console.log(str)

let str = "Hello that \"color\" is red"
console.log(str)

let str = "Hello, how're you doing?"

let str = 'that "color" is red'


let str = `it\`s, it's, "color"`


let str = "hello"
console.log(str.length)

// Accessing string characters
// [] or charAt()
console.log(str[1])
console.log(str.charAt(2))

let str = 'abc'
str = "Apple"

console.log(str[0])//A

str[0] = 'D'

console.log(str[0])


// concatination of strings, [+, concat]

let name1 = 'vijay Pratap Singh'
let age = 22

console.log(`${name1} is ${age} years old`)
let statement = name1 + " is " + age + " years old"

console.log(statement)

let newStr = name1.concat(" ", age)

console.log(newStr)
