const person = {
    name: "Yana",
    age: 24,
    hobbies: "art history, reading of classics",
    wardrobe: "black and classic",
}

person.adress = "Perm";
person.wardrobe = "white and classic"

delete person.hobbies

console.log(person.name)
console.log(person["age"])
console.log(person["wardrobe"])
console.log(person["adress"])
console.log(person["hobbies"])