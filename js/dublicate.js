//Input: [1,2,3,1] → true
// Input: [1,2,3,4] → false

function containDublicate(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false
}

console.log(containDublicate([1,2,3,1])); //true
console.log(containDublicate([1,2,3,4])); //false