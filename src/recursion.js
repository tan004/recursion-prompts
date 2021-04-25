/* jshint esversion: 6 */
// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1);
};
console.log(factorial(5)); // 120


// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
    if (array.length === 0) {
        return 0; //base case.
    }

    let last = array.pop();
    last = last + sum(array);
    return last;

};
console.log(sum([1, 2, 3, 4, 5, 6])); // 21


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // test whether the array[i] is an other array or not. return T or F.
        if (array[i] instanceof Array) {
            sum = sum + arraySum(array[i])
        } else {
            sum = sum + array[i];
        }
    }
    return sum;
}
console.log(arraySum([1, [2, 3], [[4]], 5])); // 15

// 4. Check if a number is even.
var isEven = function (n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    }
    if (isEven(n - 2)) {
        return true
    } else {
        return false;
    }
};
console.log(isEven(8));
console.log(isEven(9));

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
    let sum = 0;
    if (n <= 0) {
        return 0;
    }
    // n-1 not includes n, then call the n-1 means next n.
    sum = sum + n - 1 + sumBelow(n - 1);

    return sum;
};
console.log(sumBelow(7)); // 21
console.log(sumBelow(10)); // 45

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {
    // includes y
    if (x === y - 1) {
        return [];
    }
    //[x+1] not includes x, combine next [x] by invok the function.
    let arr = [x + 1].concat(range((x + 1), y));

    return arr;
};
console.log(range(2, 9)); // [3,4,5,6,7,8]

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
    if (base === 0) {
        return 0;
    }

    if (exp === 0) {
        return 1;

    } else if (exp < 0) {
        base = 1 / (exponent(base, Math.abs(exp)))
        return base;
    }
    else {
        base = base * (exponent(base, exp - 1))

        return base;
    }
};
console.log(exponent(2, 5)); // 32


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    if (n === 1) {
        return true;
    }
    if (n < 1) {
        return false;
    }

    if (powerOfTwo(n / 2)) {
        return true;
    }

    return false;
};

console.log(powerOfTwo(1)); // true
console.log(powerOfTwo(2)); // true
console.log(powerOfTwo(15)); // false

// 9. Write a function that reverses a string.
var reverse = function (string) {
    if (string.length === 0) {
        return "";
    }
    let first = string[0];
    return reverse(string.slice(1)) + first;
};
console.log(reverse('string'))

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
    if (string.length <= 1) {
        return true;
    }

    if (string[0] === string[string.length - 1]) {

        return palindrome(string.slice(1, string.length - 1));
    } else {
        return false;
    }

};
console.log(palindrome('racdcqr'))


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
    if (x < 0) {
        x = -x;
    }
    if (y < 0) {
        y = -y;
    }

    if (y > x) {
        return x;
    }

    return modulo(x - y, y);

};
console.log(modulo(5, 2)) // 1
console.log(modulo(17, 5)) // 2
console.log(modulo(22, -6)) // 4)

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function (x, y) {
    if (y === 0 || x === 0) {
        return 0;
    }

    if (y > 0) {
        return x + multiply(x, y - 1);
    }

    if (y < 0)

        return -multiply(x, -y);

};
console.log(multiply(2, -8));

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {
    let count = 0;
    if (y === 0) {
        return 0;
    }
    if (x === 0) {
        return count;
    }

    if (y > 0) {
        x -= divide(x - y, y)
        count++;

    }

    return count;
};
console.log(divide(6, 2));

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    if (str1.length === 0) {
        return true;
    }

    if (str1[0] !== str2[0]) {
        return false;
    } else {
        return (compareStr(str1.slice(1), str2.slice(1)));
    }
};

console.log(compareStr('house', 'houses'));// false;
console.log(compareStr('tomato', 'tomato')); // true



// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
    let arr = [];
    if (str.length === 0) {
        return [];
    }

    if (str.length > 0) {
        arr.push(str[0], ...createArray(str.slice(1)))
    }
    return arr;
};
console.log(createArray('house'))
console.log(createArray('tomato'))



// 17. Reverse the order of an array
var reverseArr = function (array) {
    let res = []
    if (array.length === 0) {
        return [];
    }

    let last = array.pop();
    res.push(last, ...reverseArr(array))

    return res;
};
console.log(reverseArr(['h', 'o', 'u', 's', 'e']))

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
    if (length === 0) {
        return [];
    }
    return [value, ...buildList(value, length - 1)]
};
console.log(buildList(0, 5)) // [0,0,0,0,0]
console.log(buildList(7, 3)) // [7,7,7]


// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
    let res = [];
    if (n === 0) {
        return [];
    }

    if (n === 3) {
        res.unshift('Fizz');


    } else if (n === 5) {
        res.unshift('Buzz');


    } else if ((n % 3 === 0 && n % 5 === 0)) {
        res.unshift('FizzBuzz');


    } else {
        res.unshift(n);
    }
    res.unshift(...fizzBuzz(n - 1))
    return res;
};
console.log(fizzBuzz(5)) // ['1','2','Fizz','4','Buzz'])

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {

};

console.log(countOccurrence([2, 7, 4, 4, 1, 4], 4)) // 3
console.log(countOccurrence([2, 'banana', 4, 4, 1, 'banana'], 'banana')) // 2

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
    let first = array[0];
    if (first === undefined) {
        return [];
    }

    return [callback(first), ...rMap(array.slice(1), callback)];
};
let timesTwo = (num) => {

    return num = num * 2;
}
console.log(rMap([1, 2, 3], timesTwo)); // [2,4,6]

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function (obj, key) {
    var count = 0;

    for (var k in obj) {

        if (k === key) {
            count++;
        }

        var inner = obj[k];
        if (typeof inner === 'object') {
            count += countKeysInObj(inner, key)
        }
    }
    return count;
}

var obj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };
console.log(countKeysInObj(obj, 'r')) // 1
console.log(countKeysInObj(obj, 'e')) // 2

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
    var count = 0;

    for (var key in obj) {
        var inner = obj[key];
        if (typeof inner === 'object') {
            count += countValuesInObj(inner, value);
        }
        if (inner === value) {
            count++;
        }
    }

    return count;

};
var obj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };
console.log(countValuesInObj(obj, 'r')) // 2
console.log(countValuesInObj(obj, 'e')) // 1

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
    let newobj = {}
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        var inner = obj[key];
        if (typeof inner === 'object') {
            replaceKeysInObj(obj[key], oldKey, newKey);
        }

        if (key === oldKey) {
            newobj[newKey] = inner;
        }
    }

    return newobj;
};
var obj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };
console.log(replaceKeysInObj(obj, 'e', 'new'));

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {
    if (n === 1) {
        return [0, 1];
    } else {
        let res = fibonacci(n - 1);
        res.push(res[res.length - 1] + res[res.length - 2]);
        return res;
    }
};
console.log(fibonacci(5)); // [0,1,1,2,3,5]

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return nthFibo(n - 1) + nthFibo(n - 2);
};

console.log(nthFibo(7)); // 13)
console.log(nthFibo(10));

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {

    if (array.length === 0) {
        return [];
    }

    let word = array[0].toUpperCase();

    return [word, ...capitalizeWords(array.slice(1))]
};

var words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {

    if (!array.length) {
        return [];
    }

    let word = array[0];
    let newWord = word[0].toUpperCase() + word.slice(1);

    return [newWord, ...capitalizeFirst(array.slice(1))]
};

console.log(capitalizeFirst(['car', 'poop', 'banana'])); // ['Car','Poop','Banana']

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
    let sum = 0;
    for (let key in obj) {
        let inner = obj[key];

        if (typeof inner === 'object') {
            sum += nestedEvenSum(inner);
        } else if (inner % 2 === 0) {
            sum += inner;
        }

    }
    return sum;
};

var obj1 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};
console.log(nestedEvenSum(obj1)); // 10

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
    let arr = [];

    if (!array.length) {
        return [];
    }
    array.forEach((el) => {
        if (Array.isArray(el)) {
            arr.push(...flatten(el))
        } else {
            arr.push(el)
        }
    });
    return arr;
};
console.log(flatten([1, [2], [3, [[4]]], 5])); // [1,2,3,4,5])


// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj={}) {
    if(str.length===0){
        return obj;
    }
    let key = str.charAt(0);

    if(obj[key]){
        obj[key] += 1;

    }else{
        obj[key] = 1;
    }

return letterTally(str.slice(1),obj);

};
console.log(letterTally('potato')); // {p:1, o:2, t:2, a:1})

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
    let first = list[0];

    for(let i =1; i< list.length; i++){

        if(first !== list[i]){
            first = list[i]
        }else{
            compress(list.splice(i,1))
            i--;
        }
    }
return list;
};
console.log(compress([1,2,2,3,4,4,5,5,5]) )// [1,2,3,4,5]
console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4])) // [1,2,3,4,2,5,4]

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug, i = 0) {

    if(i === array.length) return array;

        let el = array[i];
        if(Array.isArray(el)){
            el.push(aug);

        }
    return augmentElements(array,aug,++i);
};
console.log(augmentElements([[],[3],[7]], 5)); // [[5],[3,5],[7,5]]

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array,index =0) {

    if(index === array.length)return array;

    for(let i = 0; i< array.length; i++){

        if( array[i]===0 && array[i+1] ===0 ){
            array.splice(i+1,1);
        }
    }
    return minimizeZeroes(array,index + 1);
};
console.log(minimizeZeroes([2,0,0,0,1,4])) // [2,0,1,4]
console.log(minimizeZeroes([2,0,0,0,1,0,0,4])) // [2,0,1,0,4]


// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array,index=0) {
    if(index === array.length) return array;

        if(index % 2 === 1 && array[index] > 0){
           array[index] = -array[index];
        }

        if(index % 2 === 0){
           array[index] = Math.abs(array[index])
        }

return alternateSign(array, index + 1);
};
console.log(alternateSign([2,7,8,3,1,4])) // [2,-7,8,-3,1,-4]
console.log(alternateSign([-2,-7,8,3,-1,4])) // [2,-7,8,-3,1,-4]

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"


var numToText = function (str,i=0,res=[]) {
const arr = ['zero','one','two','three','four','five','six',
'seven','eight','nine']
const number = ['0','1','2','3','4','5','6','7','8','9']
    let split = str.split(' ');

    if(split.length === i)return res.join(' ');

    if(number.includes(split[i])){
        res.push(arr[split[i]])
    }else{
        res.push(split[i])
    }

//    res.push(convert(split[i]))


    return numToText(str,i+1,res);
};

console.log(numToText("I have 5 dogs and 6 ponies")); // "I have five dogs and six ponies"
// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
};
