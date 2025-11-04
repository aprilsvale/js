class Book {
    constructor(title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page;
    }
    greet() {
        console.log(`Welcome a new book ${this.title} by ${this.author} on ${this.page} page`);
    }
}

const newBook = new Book('Gone with the wind', 'Margareth Mitchell', 211);
newBook.greet();




class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    displayInfo() {
        console.log(`Here is ${this.name} with this email: ${this.email}`)
    }
}

const userJason = new User ('Jason', 'jason@gmail');
const userPatric = new User ('Patric', 'patric@gmail');
const userAmanda = new User ('Amanda', 'amanda@gmail');
const userCaroline = new User ('Caroline', 'caroline@gmail');


userJason.displayInfo();
userPatric.displayInfo();
userAmanda.displayInfo();
userCaroline.displayInfo();




class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return this.width * 2 + this.height * 2;
    }

    set width(value) {
        if (value <= 0) {
            console.error('Ширина должна быть положительным числом.');
        } else {
            this._width = value;
        }
    }

    get width() {
        return this._width;
    }

    set height(value) {
        if (value <= 0) {
            console.error('Высота должна быть положительным числом.');
        } else {
            this._height = value;
        }
    }

    get height() {
        return this._height;
    }
}

const myRect = new Rectangle(5, 10);
console.log(myRect.area);
myRect.width = -3;
console.log(myRect.width);
console.log(myRect.perimeter);
myRect.height = -3;