const doll = {};

Object.defineProperty(doll, 'name', {
    value: 'Barbie',
    writable: false,
    enumerable: true,
    configurable: false,
});


Object.defineProperty(doll, 'age', {
    value: 23,
    writable: false,
    enumerable: true,
    configurable: false,
});


Object.defineProperty(doll, 'profession', {
    value: 'fashion model',
    writable: false,
    enumerable: false,
    configurable: false,
});


doll.name = 'Cher';
doll.age = 24;
doll.profession = 'stylist';
console.log(doll.name);
console.log(doll.age);
console.log(doll.profession);


console.log('\nСвойства объекта:');
for (let key in doll) {
    console.log(`${key}: ${doll[key]}`);
}