function countDown (seconds) {
    let remainingTime = seconds;

    function tick () {
        if (remainingTime <= 0) {
            console.log("Time is out!");
            return;
        }

        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        console.log(`${timeString} seconds are left`);

        remainingTime--;

        setTimeout (tick, 1000);
    }
    tick();
}

countDown (10);


function water() {
    console.log("Drink water!")
}

setInterval(water, 1800000);
