async function delay(mls) {
    await new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, mls);
    });
    console.log('Finished waiting...')
}



const url = 'http://jsonplaceholder.typicode.com/posts'

async function fetchFunction() {
    console.log('Fetching');
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log ('Data:', data);
}

fetchFunction()