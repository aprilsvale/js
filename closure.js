function carousel() {
    let count = 0;
    return function toys() {
        count++;
        return count;
    };
}

const carouselOne = carousel();
console.log(carouselOne());
console.log(carouselOne());
console.log(carouselOne());
console.log(carouselOne());

const carouselTwo = carousel();
console.log(carouselTwo())








function theatre() {
    let count = 0;
    let showName = "Karabas";

    function game() {
        count++;
        let gameScore = 10;
        
        function doll() {
            let dollName = "Malvina";
            return `${dollName} from "${showName}": Count = ${count}, Score = ${gameScore}`;
        }
        return doll();
    }
    return game();
}


const puppetShow = theatre();
console.log(puppetShow);
