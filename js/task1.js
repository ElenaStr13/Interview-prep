//task 1.1
function reverseString(str) {
     //str = "hello";
    const reversed = str.split("").reverse().join("");
    return reversed;
}

console.log(reverseString("hello")); //olleh

//task 1.2
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

function getMostFrequentChar(str) {
    // повернути символ
}

//task 1.3
function getMostFrequentChar(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    for (let char of str) {
        // Рахуємо скільки разів зустрівся символ
        charMap[char] = (charMap[char] || 0) + 1;

        // Оновлюємо лідера, якщо поточний символ зустрічається частіше
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(getMostFrequentChar("javascript")); // "a"

//task 1.4
function uniqueArray(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(uniqueArray([1, 1, 5, 5, 10]));

//task 1.5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}