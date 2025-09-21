function safeDivide (a, b) {

try {
    if (b === 0) {
        throw new Error('Выйдите вон!')
    }
return a/b;
}
catch (error) {
    console.log('Mistake!', error.message);
    return null;
}
}


console.log(safeDivide(7, 0))



function transformJSON(carousel) {
try {
    const object = JSON.parse(carousel);
    return object;
} catch(error) {
    console.error('Go away!')
}
}

const crazy = 'Hello!';
const result = transformJSON(crazy);


function age (a) {
try {
    if (a < 18) {
    throw new Error('Куда собрались?');
    }
    return ('Норм');
} 
catch (error) {
    console.log('Ошибка:', error.message);
    return 'выйдите вон';
}
}

console.log(age(16))
