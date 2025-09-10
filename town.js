let a = 6;
if (a>0) {
    console.log ("Positive");
} else if (a=0) {
    console.log ("Zero");
} else {
    console.log ("Negative")
}


const weight = 55;
const height = 172;

const product = height * height;
const index = weight / product;

if (weight>0) {
    console.log ("Great!");
} else {
    console.log ("Amazing!")
}




const month = 6;
let monthName;

switch (month) {
    case 1:
        monthName = 'January';
        break;
    case 2:
        monthName = 'February';
        break;
    case 3:
        monthName = 'March';
        break;
    case 4:
        monthName = 'April';
        break;
    case 5:
        monthName = 'May';
        break;
    case 6:
        monthName = 'June';
        break;
    case 7:
        monthName = 'July';
        break;
    case 8:
        monthName = 'August';
        break;
    case 9:
        monthName = 'September';
        break;
    case 10:
        monthName = 'October';
        break;
    case 11:
        monthName = 'November';
        break;
    case 12:
        monthName = 'December';
        break;
     default:
        monthName = 'Not correct';
        

}

console.log(monthName); 





const dish = 4;
let dishName;


switch (dish) {
    case 1:
        dishName = 'Croissant';
        break;
    case 2:
        dishName = 'Cake';
        break;
    case 3:
        dishName = 'Dessert of the day';
        break;
    case 4:
        dishName = 'Gelato';
        break;
    case 5:
        dishName = 'Watermelon';
        break;
    default:
        dishName = 'Does not exist';  
}

    console.log (dishName);
