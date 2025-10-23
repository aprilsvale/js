function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
        const userData = {
            name: "Patricia",
            age: 29,
            profession: "hair stylist",
        };
        resolve(userData);
        }, 2000);
});
}

getUserData()
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log('Ошибка:', error);
    });






function promiseAfterThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3 seconds');
            },3000);
    });
}

function promiseAfterFive() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('5 seconds');
        },5000);
    });
}

Promise.allSettled([promiseAfterThree(), promiseAfterFive()])
.then((results) => {
    results.forEach((result) => {
        console.log('Done', result.value);
    });
});




function promiseAfterRandom() {

    const minDelay = 1000;
    const maxDelay = 10000;
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('pink');
        },randomDelay);
    });
}

function promiseAfterRandom1() {

    const minDelay = 1000;
    const maxDelay = 10000;
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('purple');
        },randomDelay);
    });
}

Promise.race([promiseAfterRandom(), promiseAfterRandom1()])
    .then((result) => {
        console.log(result); // 'Промис 1 выполнен'
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });

