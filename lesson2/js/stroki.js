// строки (тип string)
// строки в javascript неизменимы
// строки в js в двойных кавычках, в одинарных
// строки в обратных кавычках
let greeting = 'Добро пожаловать';
greeting = "Добро пожаловать на \"САЙТ\"";
greeting = "Добро пожаловать на \n \"САЙТ\"";
// если необходимо экранировать спец. символы, делать это через \
greeting = "Добро пожаловать на \\n \"САЙТ\"";

// строки в обратных кавычках позволяют передавать выражения через $ {}
let login = 'qwe';
let age= 18;
let info = `Пользователь ${login}, возраст ${age} лет`;
console.log(info);

// длина строки
let tstStr = 'Автобус';
console.log(tstStr.length);
// доступ к символам строки
console.log(tstStr[3]);
// о
for (let elem of tstStr){
    console.log(elem);
}

// методы
tstStr = 'Автобус';
let newStr = tstStr.toUpperCase(); // верхний регистр
tstStr = tstStr.toUpperCase();
console.log(newStr);
// нижний регистр
newStr = tstStr.toLowerCase();
console.log(newStr);

// убрать пробелы с начала и конца строки
tstStr='            Автобус    ';
console.log(tstStr.length);
tstStr = tstStr.trim();
console.log(tstStr.length);
tstStr = 'Автобус';
console.log(tstStr.startsWith('ав'));
console.log(tstStr.endsWith('с'));
console.log(tstStr.includes('то'));
// сравнение строк
let compare1 = 'апоезд';
let compare2 = 'тпоезд';
console.log(compare1 > compare2);
console.log(compare1 < compare2);
console.log(compare1 === compare2);
let compareRes = compare1.localeCompare(compare2);
console.log(compareRes);
// 0 - строки равны
// положительное число - строка у которой мы вызываем метод больше, чем у другой
// отрицательное число - compare2 больше, чем compare1

// indexOf / lastIndexOf
// slice
// substring

// определить является ли слово палиндромом
let strArr = "asdafagd"
let strArr2 = strArr.split("").reverse().join(""); // сплит массив из строчки, джоин из массива строчку
console.log(strArr2);
let res = strArr === strArr2 ? 'Палиндром' : 'Не палиндром';
console.log(res);


intArr = [3, 4, 12, -34, 0];
let sum = 0;
// найти сумму элементов массива
for (let elem of intArr) {
    sum += elem;
}
console.log(sum);