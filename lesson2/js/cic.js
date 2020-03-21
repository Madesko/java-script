// циклы позволяют выполнить однотипное действие несколько раз
// while
// do while
// for
//while (условие) {
    //тело цикла
// }

/* let key = null;
while (key !== 'admin') {
    key = prompt("Введите пароль"); // модальное окно для получения данных от пользователя
    console.log("key", key);
}
*/
// do {
  //  тело цикла
// } while (условие);

do {
    console.log("false condition");
}   while (false);

/*let a = 5;
do {
    console.log("a = " + a);
    a--;
} while (a);
*/
let a = 0;
while (a <= 50) {
    ++a;
    if (a % 3 === 0) {
        console.log("После деления без остатка" + a);
    }
}
let b = 0;
while (b <= 50) {
    ++b;
    if (b % 5 === 0) {
        console.log("После деления без остатка" + b);
    }
}

// for(начало/инициализация счетчиков; условия; обновление счетчиков) {
// тело цикла }

// Дано 5 попыток, чтобы угадать число
let attemptCount = 5;
let answer = 456;
// for (;;) {} - бесконечный цикл
for (let i = 1; i <= attemptCount; i++) {
    let user_data = prompt("Введите число");
    if (parseInt(user_data) === answer) {
        alert("Вы угадали");
        break;
        // continue; переход на следущую итерацию цикла
    }
    alert("Осталось попыток" + (attemptCount - i));
}