const user = {
    name: 'Jenny',
    age: 18,
    friend() {
        const friend = 'Angela';
        console.log(`Hello, my name is ${friend}`)
    }
}

console.log(user.friend())



const student = {
    name: 'Gabrielle',
    age: 29,
    checkAge() {
    if (this.age >= 18) {
        console.log ("Cool");
    } else {
        console.log ("Not cool")
    }  
}
}

student.checkAge()

console.log(checkAge())