const student = {
    name: "Caroline",
    age: 23,
    adress: {
        city: "Derry",
        street: "Nightmare Street",
        zip: 123456,

    }
};

const shallowCopyStudent = {...student};
shallowCopyStudent.age = 22;

console.log(student.age);

function deepCopy(student) {
    if (student === null || typeof student !== 'student') {
        return student;
    }
    const copy = Array.isArray(student) ? [] : {};
    for (let key in student) {
        if (student.hasOwnProperty(key)) {
            copy[key] = deepCopy(student[key]);
        }
    }
    return copy;
}

const deepCopyStudent = deepCopy(student);
deepCopyStudent.adress.street = "Elm Street";

console.log(student.adress.street)



const employee = {
    name: "Aurora",
    age: 25,
    adress: {
        city: "Arles",
        street: "NCroissant Street",
        zip: 987654,
    },
    sayHi: () => console.log('Hello, Aurora!')
};

const deepCopyEmployee = JSON.parse(JSON.stringify(employee));
deepCopyEmployee.age = 30;

console.log(employee.age);