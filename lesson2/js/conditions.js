// конструкции ветвления
// используются, когда появляется
// необходимость выполнить код в зависимости
// от условия или условий

/*
if (условие) {
    блок кода выполняется, если условие true
}
*/
let age = 13;
if (age >= 18) {
    console.log("Добро пожаловать на сайт");
} else { // дополнительный блок else
    console.log("Вы не можете посещать данный ресурс");
}

const GREEN = "green";
const BLUE = "blue";
const ORANGE = "orange";
const YELLOW = "yellow";
const WHITE = "white";

// spring / summer / autumn / winter
let season = 'summer';

if (season === 'spring') {
    document.body.style.background = YELLOW;
} else if (season === 'summer') { // дополнительное условие
    document.body.style.background = GREEN;
} else if (season === 'autumn') {
    document.body.style.background = ORANGE;
} else if (season === 'winter') {
    document.body.style.background = BLUE;
} else {
    document.body.style.background = WHITE;
}

let day = "понедельник";
if (day === "суббота" || day === "воскресенье") {
    console.log("Выходной");
}   else if (day === "понедельник" || day === "вторник" || day === "среда" || day === "четверг" || day === "пятница") {
    console.log("Работай раб");
}   else {
    console.log("Введите правильное значение")
}

// switch конструкция
let num = 333333;
switch (num) {
    case 111111:
        console.log("Крупный приз");
        break; // прерывание switch
    case 222222:
    case 333333:
        console.log("Средний приз");
        break;
    case 444444:
    case 555555:
    case 666666:
        console.log("Небольшой приз");
        break;
    default: // если не будет найдено ниодного совпадения
        console.log("Попробуйте еще раз");
}
// выполняется от первого найденного совпадения
// до первого break или до конца конструкции switch