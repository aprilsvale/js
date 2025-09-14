const divide = (a=9, b=3, c=1) => {
    return a/b/c;
};

console.log(divide())



const employee = {
    name: "Aurora",
    age: 25,
    adress: {
        city: "Arles",
        street: "NCroissant Street",
        zip: 987654,
    },
    greetLater() {
        setTimeout(() => {
            console.log('Hello, Aurora');
        }, 1000);
    }
}

employee.greetLater();




const names = ["Angela", "Isaballe", "Caroline"];
const division = names.map(n=> "Christine");

console.log(division);