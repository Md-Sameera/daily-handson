let user = {
    'name': 'Rahul',
    age: 25,
    isAdmin: false
}


console.log(user.name)

console.log(user['name'])

let user = new Object() //object constructor syntax
user.name = 'Rahul'
console.log(user)

delete user.name

console.log(user)



let user = {
    'name': 'Rahul',
    age: 25,
    isAdmin: false,
    'like birds': true
}

console.log(user['like birds'])

let fruit = 'apple'
let obj = {
    [fruit + 'Computers']: true //computed properties
}

console.log(obj.name)


let user = {
    name: 'Rahul',
    age: 24
}
console.log("age" in user) // boolean value


// looping in object
// for in loop


let user = {
    name: 'Rahul',
    age: 24,
    isAdmin: true
}

for (let key in user) {
    //print keys
    console.log(key, user[key])
}


// Multiply ONLY the numeric values with 2
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

for (let key in menu) {
    if (typeof menu[key] === 'number') {
        menu[key] = menu[key] * 2
    }
}

console.log(menu)



// -------Object referencing and copying

let message = "hello"
phrase = message + "world"

console.log(message)
console.log(phrase)


let user = {
    name: 'rahul'
}

admin = user

console.log(user)
console.log(admin)

admin.name = 'Pooja'

console.log(user, 'user')
console.log(admin, 'admin')




let user = { name: 'Rahul' }
let admin = { name: 'Aarti' }

admin.name = 'Shruti'
// console.log(admin === user)
console.log(user)
console.log(admin)



let user = {
    name: 'Rahul',
    age: 23,
    isHappy: true
}

let duplicate = {}


// for (let key in user) {
//     duplicate[key] = user[key]
// }

Object.assign(duplicate, user)
let clone = Object.assign({}, user)
clone.isHappy = false //to show that duplicate is independent

console.log(user)
console.log(clone)



// SPREAD OPERATOR ...

let user = {
    name: 'rahul',
    age: 23
}

let clone = { ...user, lastName: 'Sharma' }

console.log(user)
console.log(clone)


let obj1 = { name: 'Rahul', x: 42 }
let obj2 = { name: 'Shyam', y: 13 }

let obj3 = { ...obj1, ...obj2 }

console.log(obj3)

//merging two objects
let employee = Object.assign(person, job);
console.log(employee
