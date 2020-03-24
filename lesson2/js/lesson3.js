intArr = [3, 5, -2, 7];
//  увеличить значение каждого элемента массива
// в 2 раза
for (let i = 0; i < intArr.lenght; i++) {
    intArr[i] *= 2;
    console.log(intArr);
}
for (let elem of intArr) {
    elem *= 2;
    console.log(elem);
}

// for in не используется для перебора массивов

let someArr = [
    [34, 67, 12, -14],
    [12, -8, 0, -23]
];
// 0

for (let i = 0; i < someArr.lenght; i++) {
    for (let j = 0; j < someArr[i].lenght; j++){
      someArr[i][j] *= 3;
    }
}
console.log(someArr);

// методы

let colors = ['red', 'white', 'green'];

// добавление/извлечение первого/последнего
// элемента массива
colors.push('black', 'orange',); // добавляет 1 или несколько элементов
console.log(colors);
// удаляет и возвращает последний элемент массива
let lastElem = colors.pop()
console.log(colors, lastElem);
// добавляет элемент в начало массива
colors.unshift('gray', 'yellow');
console.log(colors);
// удаляет первый элемент массива
let firstElem = colors.shift();
console.log(colors, firstElem);
searchRes = console.log(colors.includes('gray'));
console.log(searchRes);

// reverse - изменяет порядок массива в обратную сторону
// split / join
// concat
// splice / slice
// indexOf / lastIndexOf

// создать двумерный массив из 3 строк
// по 5 столбцов в каждом
// заполнить случайными (random) числами из отрезка [-99; 99]
// вывести массив в консоль
// найти значение максимального элемента массива, вывести его индекс и значение


let newArr = [[],[],[]];
let max_all;
newArr.length = 3;
console.log(newArr);
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++){
        let min = -99;
        let max = 99;
        let random_j = Math.floor(Math.random() * (+max - +min + 1) + +min);
        newArr[i][j] = random_j;
    }
    for (let k = 0; k < 6; k++){
        let min = -99;
        let max = 99;
        let random_k = Math.floor(Math.random() * (+max - +min + 1) + +min);
        newArr[i][k] = random_k;
    }
    for (let l = 0; l < 6; l++){
        let min = -99;
        let max = 99;
        let random_l = Math.floor(Math.random() * (+max - +min + 1) + +min);
        newArr[i][l] = random_l;
    }
}
console.log(newArr);
