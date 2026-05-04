//task 2.1 відкладає виконання, запускає fn тільки якщо більше немає викликів
function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

//task 2.2 якщо елемент — масив → розкриваємо його рекурсивно, якщо ні → додаємо в результат
function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

//task 2.3 проходиться по масиву, застосовує функцію до кожного елемента, повертає новий масив
function myMap(arr, fn) {
    const result = [];
for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
}
return result;
}

const arr = [1, 2, 3];
const res = myMap(arr, x => x * 2);
console.log(res); // [2, 4, 6]