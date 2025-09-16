const worker = {
    name: 'Caroline',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greetYou = worker.greet;
greetYou ();




const student = {
    name: 'Angela',
};

function greetStudent() {
    console.log (`Hello, I am ${this.name}`)
}

greetStudent.bind(student)




function sayHello() {
	console.log('Hello, ' + this.name)
}

const admin = {
	name: 'Bob'
};

const user = {
	name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin)
sayHelloToAdmin()

const sayHelloToUser = sayHelloToAdmin(user)
sayHelloToUser()