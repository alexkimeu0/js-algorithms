/* ========================================== */
/* Palindrome */
function isPalindrome(x) {

    // Convert the string to lower case to avoid matchcase issues
    var word = x.toLowerCase();

    // Empty array to push each xter of the string as an item
    var arr = [];

    // Empty string = Reversed string
    var rword = "";

    for (var i = 0; i < word.length; i++) {
        arr.push(word[i]);
    }

    for (var i = 0; i < word.length; i++) {
        rword += arr.pop();
    }

    if (word == rword) {
        return true;
    } else {
        return false;
    }
}

isPalindrome("BoB");


/* ========================================== */
/* Reverse String - From scratch */
function reverseStr(str) {
    var reversedStr = "";

    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

/* ========================================== */
/* Reverse String - Built in methods*/
function reverseStr(str) {

    // Split the string xters to array items
    var arr = str.split("");

    // Reverse the items in the array
    var reversedArr = arr.reverse();

    // Convert array to a string
    var reversedStr = reversedArr.join("");
    return reversedStr;
}

reverseStr("Hello");

/* ========================================== */
/* Reverse String - Chain methods */
function reverseStr(str) {
    return str.split("").reverse().join("");
}


/* ========================================== */
/* Factorialize */
function factorialize(num) {
    var result = 1;

    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

/* ========================================== */
/* Length of the Longest Word in a string */
function longestWord(str) {
    // Split the words in the string
    var words = str.split(" ");
    var longest = "";

    for (var word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest.length;
}


/* ========================================== */
/* Length of Longest Word */
function longestWord(str) {
    return str.split(" ").sort(function (a, b) {
        return b.length - a.length
    })[0].length;
}


/* ========================================== */
/* Title Case a sentence */
function titleCase(str) {
    var words = str.toLowerCase().split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}


/* Title Case a sentence */
function titleCase(str) {
    var titled = str.toLowerCase().split(" ").map(function (elem) {
        return elem[0].toUpperCase() + elem.slice(1);
    });
    return titled.join(" ");
}


/* ========================================== */
/* Max Numbers ina 2D Array */
function largestOfFour(arr) {
    var maxNums = [];

    for (var i = 0; i < arr, length; i++) {
        var maxNum = arr[i][0];

        for (var j = 0; j < arr[i].length; j++) {
            var currentElem = arr[i][j];

            if (currentElem >= maxNum) {
                maxNum = currentElem;
            }
        }
        maxNums.push(maxNum);
    }
    return maxNums;
}



/* ========================================== */
/* Spinal Tap Case */
function spinalCase(str) {

    return str.split('')
        .map(c => /[A-Z]/.test(c) ? `-${c.toLowerCase()}` : c)
        .join('')
        .split(/[_ -]+/)
        .filter(word => word.length)
        .join('-');
}

spinalCase('This Is Spinal Tap');



/* ========================================== */
/* Pig Latin */
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const translatePigLatin = str => {
    if (VOWELS.includes(str[0])) {
        return `${str}way`;
    }
    if (str.split('').every(c => !VOWELS.includes(c))) {
        return `${str}ay`
    }

    const consCluster = str.split(/[aeiou]/)[0];
    return `${str.substring(consCluster.length)}${consCluster}ay`
}

translatePigLatin("consonant");



/* ========================================== */
/* Missing Letter in an Array of Letters */
function findMissingLetter(array) {
    let ouput;
    var str = array.join('');

    for (let i = 0; i < str.length - 1; i++) {
        const currCode = str.charCodeAt(i);
        const nextCode = str.charCodeAt(i + 1);

        if (nextCode - currCode !== 1) {
            ouput = String.fromCharCode(currCode + 1);
            break;
        }
    }
    return ouput;
}



/* ========================================== */
/* Sorted Union */
function uniteUnique(arr) {

    const arrOfArr = [...arguments];
    const output = [];

    for (const arr of arrOfArr) {
        for (const b of arr) {
            if (!output.includes(b)) {
                output.push(b);
            }
        }
    }
    return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



/* ========================================== */
/* Convert to HTML Entities */
const htmlDict = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
}
function convertHTML(str) {
    let output = '';

    for (const c of str) {
        if (c in htmlDict) {
            output += htmlDict[c];
        } else {
            output += c;
        }
    }
    return output;
}

convertHTML("Dolce & Gabbana");


/* ========================================== */
/* Odd Fibonacci */
function sumFibs(num) {

    let a = 1;
    let b = 1;

    let sum = 1;

    while (b <= num) {
        if (b % 2 !== 0) {
            sum += b;
        }
        [a, b] = [b, a + b];
    }
    return sum;
}

sumFibs(4);



/* ========================================== */
/* Sum of Primes */
function sumPrimes(num) {
    if (num < 2) {
        return 0;
    }

    const primes = [];

    for (let i = 2; i <= num; i++) {
        let isComposite = false;

        for (const p of primes) {
            if (i % p === 0) {
                isComposite = true;
                break;
            }
        }

        if (!isComposite) {
            primes.push(i);
        }
    }

    let sum = 0;
    for (const p of primes) {
        sum += p;
    }

    return sum;
}

sumPrimes(10);



/* ========================================== */
/* Smallest Common Multiple */
function smallestCommons(arr) {

    const small = Math.min(...arr);
    const big = Math.max(...arr);

    let scm = big;

    while (true) {
        let IsScm = true;

        for (let i = small; i <= big; i++) {
            if (scm % i !== 0) {
                IsScm = false;
                break;
            }
        }

        if (IsScm) {
            return scm;
        } else {
            scm++;
        }
    }

    return arr;
}


smallestCommons([1, 5]);



/* ========================================== */
/* Drop it */
function dropElements(arr, func) {
    let trueIndex = arr.findIndex(func);
    if (trueIndex === -1) {
        return [];
    } else {
        return arr.slice(trueIndex);
    }
}

dropElements([1, 2, 3], function (n) { return n < 3; });




/* ========================================== */
/* Flatten Array */
const flatten = arr => {
    const result = [];
    for (const el of arr) {
        if (Array.isArray(el)) {
            result.push(...el);
        } else {
            result.push(el);
        }
    }
    return result;
};


function steamrollArray(arr) {
    let result = arr;

    while (true) {
        let isFlat = true;
        for (const el of result) {
            if (Array.isArray(el)) {
                isFlat = false;
                result = flatten(result);
                break;
            }
        }
        if (isFlat) {
            return result;
        }
    }
}

steamrollArray([1, [2], [3, [[4]]]]);



/* ========================================== */
/* Binary Agents */
function binaryAgent(str) {
    return str
        .split(' ')
        .map(el => String.fromCharCode(parseInt(el, 2)))
        .join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



/* ========================================== */
/* All Truthy */
function truthCheck(collection, pre) {
    let isTruthy = true;

    for (const obj of collection) {
        if (!obj[pre]) {
            isTruthy = false;
            break;
        }

    }
    return isTruthy;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");



/* ========================================== */
/* Arguments Optional */
const addTogether = (...args) => {
    const [arg1, arg2] = args;

    if (typeof arg1 !== 'number') {
        return undefined;
    }

    if (arg2 === undefined) {
        return num => typeof num !== 'number' ? undefined : arg1 + num;
    }

    if (typeof arg2 !== 'number') {
        return undefined;
    }
    return arg1 + arg2;
}

addTogether(2, 3);


/* ========================================== */
/* Map the Debris */
const GM = 398600.4418;
const earthRadius = 6367.4447;

const orbitalPeriod = arr => arr
    .map(obj => ({
        name: obj.name,
        orbitalPeriod: Math.round(
            2 * Math.PI * Math.sqrt(
                Math.pow(earthRadius + obj.avgAlt, 3) /
                GM
            )
        )
    }));

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
