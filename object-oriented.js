class Car {
    constructor(brand, model) {
        this._brand = brand;
        this._model = model;
    }
    display () {
        console.log(`New car: ${this._brand} and ${this._model}`);
    }
}



class ElectricCar extends Car {
    constructor(brand, model, capacity) {
        super(brand, model);
        this._capacity = capacity;
    }

    display() {
        super.display();
        console.log(`Capacity of the electric car equals ${this._capacity}`);
    }
}


class MechanicCar extends Car {
    constructor(brand, model, capacity) {
        super(brand, model);
        this._capacity = capacity;
    }

    display() {
        super.display();
        console.log(`Capacity of the mechanic car equals ${this._capacity}`);
    }
}


const cars = [new ElectricCar('Volga', '23', 1000), new MechanicCar('Gas', 'Chaika', 2000)];
cars.forEach(car => {
    car.display();
});
