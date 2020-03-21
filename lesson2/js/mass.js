// массивы
let arr = []; // пустой массив
console.log(arr);

let colors = ['red', 'white', 'green'];
console.log(colors);

// доступ к элементам массива
// осуществляется по индексу
let item = colors[2];
console.log(item);
item = colors[58];
console.log(item); // undefined
colors[1] = "black";
colors[34] = "orange";
console.log(colors);

// длина массива
let colorsLen = colors.length;
console.log(colorsLen);

// перебор массива
colors = ['red', 'white', 'green'];
for (let i = 0; i < colors.lenght; i++) {
    console.log(colors[i]);
    colors[i] += '-color';
}

console.log(colors);

let intArr = [23, 56, -12, 67, -222, 0, -98];
for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] > 0) {
        console.log(intArr[i]);
    }
}