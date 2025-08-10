const numbers = ["2", "3", "4"];
const squares = numbers.map(x => x * x);

console.log(squares); 



const numero = ["1", "2", "2", "3", "4", "5", "5", "5", "6"];
const elementary = [...new Set(numero)];

console.log(elementary); 



const call = [3, 5, 6];
const advanced = call.reduce((total, num) => total + num, 0);  

console.log(advanced); 




const letters = [3, 5, 6];
const proficiency = letters.reverse(letters);

console.log(proficiency); 




let fruits = ["Apple", "Banana"];
const cars = ["BMW", "Audi"];
