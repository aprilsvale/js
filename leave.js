const numbers = [1, 2, 3];
const sum = (a, b, c) => (a + b + c)/2;

console.log(sum(...numbers));



function getUserInfo({ name, age, country }) {
  return `Пользователь ${name}, возраст ${age} лет, из страны ${country}`;
}

const user = {
  name: "Анна",
  age: 28,
  country: "Россия"
};

console.log(getUserInfo(user)); 





const usere = {
  name: "Иван",
  age: 30,
  address: {
    country: "Россия",
    city: "Москва",
    street: "Ленина",
  },
  hobbies: ["чтение", "программирование", "путешествия"],
  workHistory: [
    { company: "Яндекс", years: 5 },
    { company: "Google", years: 3 }
  ]
};

const { 
  name,
  age,
  address: {
    city,
    street,
  },
  hobbies: [firstHobby, , thirdHobby], 
  workHistory: [{ company: firstJob }, { company: secondJob }]
} = usere;

console.log(name);        
console.log(city);       
console.log(firstHobby);  
console.log(thirdHobby);  
console.log(firstJob);   
console.log(secondJob);   





const object1 = [5, 6, 7];
const object2 = [2, 3, 4, ...object1, 8, 9, 10]

console.log(object2);




const { a, b, ...rest } = { a: "pumpkin", b: "orange", c: "grape", d: "cranberry" };
console.log(rest)
