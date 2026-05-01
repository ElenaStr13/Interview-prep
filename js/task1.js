//task 1.1
function reverseString(str) {
     //str = "hello";
    const reversed = str.split("").reverse().join("");
    console.log(reversed);
}

console.log(reverseString("hello")); //olleh

//task 1.2
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false