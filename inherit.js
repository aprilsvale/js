class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I study on the ${this.course} year`)
    }
}


class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }

    work() {
        console.log(`I work as a ${this.position}`)
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am a ${this.position}`)
    }
}

console.log(Employee.prototype);






function Vehicle() {}

Vehicle.prototype.move = function() {
    console.log(`Vehicle moves`);
};

function Car() {}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
    console.log('He drives a car.');
};

const myCar = new Car();
myCar.move();
myCar.drive();