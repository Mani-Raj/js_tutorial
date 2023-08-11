// Prototypal inheritance

// Object literals
const person = {
    alive: true
};

const musician = {
    plays: true
};

// musician.__proto__ = person;
console.log(musician.plays);
console.log(musician.alive);

// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);

console.log(Object.getPrototypeOf(musician) === musician.__proto__); // true both methods are same line 12 and 17

console.log(musician.plays);
// if missing property ==> got to person prototype
console.log(musician.alive);

// Extending the prototype chain => general to specific to more specific
// musician -> persion -> guitarist ( values will be searched 1st chain and then goes to next chain and then goes to next chain)
const guitarist = {
    strings: 6,
    __proto__: musician
};


// No circular reference allowed (person.__proto__ can't be guitarist)
// The __proto__value must be an object or null.
// An object can only directly inherit from one object


// object with getter and setter methods

const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
};

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car); // not copying the object
luxuryCar.seatMaterial = "leather"; // Note Keyword "this"
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);

// Walking up the chain - props and methods are not copied
console.log(luxuryCar.valueOf());

//Getting the keys of an object
console.log(Object.keys(luxuryCar));

// loop through each object key
Object.keys(luxuryCar).forEach(key=> {
    console.log(key);
})

// But a for..in loop includes inherited props
for (let key in luxuryCar) {
    console.log(key)
}

// Object constructors
function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function() {
    return `A ${this.species} is walking.`;
}

const Bear = new Animal("bear");

console.log(Bear.species);
console.log(Bear.walks());

// The prototype property is where iheritable props and methods are 
console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Animal.prototype);

console.log(Bear);

//Now on ES6 classes example for inheritance

class Vehicle {
    constructor() {
        this.wheels = 4;
        this.motorized = true;
    }

    ready() {
        return "Ready to go!";
    }
}

class Motocycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2;
    }

    wheelie() {
        return "On one wheel now!"
    }
}

const myBike = new Motocycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());

const myTruck = new Vehicle();
console.log(myTruck);