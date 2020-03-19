// однострочные комментарии
/* многострочные комментарии
 */
// объявление переменных
// JavaScript - интерпритируемый язык программирования со слабой динамической типизацией
let book_title = "Книга";
book_title = "Журнал";
var count = 147; // устаревший способ объявления переменных
// отладка - вывод в консоль
console.log(count,book_title); // вывод значения переменной в консоль
const VERSION_CODE = 564 //писать в верхнем регистре через нижнее подчеркивание
console.log(VERSION_CODE);
let meesage; // объявление переменной
message = "Авторизация прошла успешно"; // присвоить значение
// переопределили значение
message = "23";
// Примитивные типы данных
// Числа (number)
let age = 57; // целые отприцательные, положительные, ноль
age = 57.5; // дробные числа
age = Infinity; // Infinity, -Infinity, NaN(ошибка вычисления, означает не числа)
console.log(age);
console.log(-age / 0);

// Строки (string) пишутся в двойных кавычках или в одинарных
let auth_info = "Успешная авторизация";
auth_info = 'Авторизация не пройдена';
let reg_info = "Регистрация пройдена";
console.log(auth_info);
let welcome = "Добро пожаловать в 'Магадан'";
console.log(welcome);
welcome = "Добро пожаловать в \"Магадан\""; // экранирование обратный слеш - используется для корректной интерпритации строчки с двойными кавычками
// логический тип данных (boolean) принимает 2 значения true или false
let stopped = true;
stopped = false;
console.log(stopped);
// undefined - значение переменной не было присвоено, не дошло до ячейки
let undefinedValue;
console.log(undefinedValue);
// null - значение есть, но оно неизвсетно
let null_value = null;
console.log(null_value);
// определение типа данных typeof
console.log(typeof stopped);
// операторы
// арифметические операторы
// + | - | * | / | % (взятие остатка от деления)
// ** возведение в степень
// + используется для преобразования строки с числом в тип number
let a = '5';
console.log(typeof a);
a = +a;
console.log(+a, typeof +a);
// + используется для конкатенации (склеивания) строк
// если один из операндов - строка, второй тоже будет строкой
// преобразован к строке
let info = auth_info + reg_info;
console.log(info);
console.log(+true); // будет равняться 1, false будет равняться 0
// при преобразовании undefined, null, 0, пустая строка -> false
// остальные арифметические операторы преобразуют операнды к числам, если преобразование будет невозможно, получится Nan
console.log('30' / 2); // плюс преобразовывает к строке, все остальные пробразовывают к числам
console.log("Проверка на Nan"); // isNan()
console.log(isNaN(info));
console.log(isNaN("123")); // true не число и нельзя преобразовать, false либо число, либо можно преобразовать к числу
console.log(9 % 2);
console.log(546 % 10);
console.log(8 % 2);
// операторы присваивания
// = | += | -= | *= | /= | %=
let num = 10;
num = num + 10; // num += 10;
num += 10;
console.log(num);
// операторы сравнения
// результат работы операторов сравнения: true или false
// < | > | <= | >=
// == равенство
// === строгое равенство
// != неравенство
// !== строгое неравенство
let height = 120;
let width = '120';
console.log(height == width); // true, с приведение к одному типу данных
console.log(height === width); // false сравнивает сразу типы данных
console.log(true == 1);
// инкремент ++ и декремент -- применяется только к переменным
// инкремент - увеличивает значение переменной на 1
// декремент - уменьшает значение переменной на 1
// 2 формы; префиксная ++i
num = 2;
console.log(++num);
console.log(num);
// постфиксная форма i++
num = 2;
console.log(num++);
console.log(num);
num = 7;
let result = num++ - num++ + num++ - --num;
// 7 - 8 + 9 - 9
console.log(result); // -1
// логические операторы
// результат работы логических операторов тоже true false
// используются для объединения условий
// || или | && и | ! не
width = 120;
console.log(height < width); // false
console.log(height <= width) // true
console.log(height > 100); // true
console.log(height < width && height > 100); // сразу вернет false, если хоть 1 false
console.log(height < width || height > 100); // сразу вернет true, если хоть 1 true
// тернарный оператор ?
// res - (условие) ? значение 1 : значение 2;
height = 567;
width = 124;
result = width < height ? "высота больше" : "ширина больше";
console.log(result);
//  дано целое число. Если число четное, делим его на 2,
// если нет - вычитаем 2
result = height % 2 === 0 ? num / 2 : num - 2;
console.log(result);

width = 2;
height = 3;
let lenght = 4;
result = 2 * (width*height + width*lenght + height*lenght);
console.log(result);