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















