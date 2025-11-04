function plus(x, y) {
    "use strict"
    let z = 10;
    return x + y;
}

console.log(plus(5, 6));




"use strict"

function minus (x, y) {
    return x - y;
}
console.log(minus(5, 6));



function demonstrate() {
    "use strict"
    console.log(this);
}
demonstrate();






const obj = { name: "test" };
function deleteWord() {
    "use strict";
    delete obj.toString;
    console.log("Удаление успешно");
}

deleteWord()