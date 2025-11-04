class Counter {
    #count = 5;


    increase(amount) {
        this.#count += amount;
        console.log(`Counter is plus ${amount}`);
    }

    decrease(amount) {
        this.#count -= amount;
        console.log(`Counter is minus ${amount}`);
    }

    getCount() {
    return this.#count;
    }
}

const counter = new Counter();
counter.increase(7);




class EmailValidator {
    static isValidEmail(email) {
        if (email.includes('@')) {
            console.log('Good')
        } else {
            console.log('Invalid email');
        }
    }
}

EmailValidator.isValidEmail("yanaa");





class Order {
    constructor(dress, jeans) {
        this.dress = dress;
        this.jeans = jeans;
    }

    #calculateTotal() {
        return this.dress + this.jeans;
    }

    displayTotal() {
        const total = this.#calculateTotal();
        return `Total: ${total}`;
    }
}

const order = new Order(50, 70);
console.log(order.displayTotal());