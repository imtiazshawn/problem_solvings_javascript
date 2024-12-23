// 0001: Write a function that takes a string as input and returns the string reversed.
const reverseStr = (input) => {
    const reverseOutput = input.split('').reverse().join('');
    return reverseOutput;
}

const output = reverseStr("Hello");
console.log(output);


// 0002: Write a function that checks whether a given number is a prime number.
const isPrime = (num) => {
    if(num <= 1) {return false};
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

const findingPrimeNumbers = (minNum, maxNum) => {
    let primes = [];
    for (let i = minNum; i <= maxNum; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const primeNumbers = findingPrimeNumbers(1, 20);
console.log(primeNumbers);


// 0003: Write a function that takes an array of numbers and returns the largest number.
const findingLargestNumber = (numArray) => {
    let largestNum = 0;
    for(let i = 0; i <= numArray.length; i++) {
        if(numArray[i] > largestNum) {
            largestNum = numArray[i];
        }
    }
    return largestNum;
}

const myNumArray = [7, 13, 23, 11, 3, 6, 3];
console.log("The Largest Number is: ", findingLargestNumber(myNumArray));


// 0004: Write a function that generates the Fibonacci sequence up to a given number n
// Way 01
const getFibonacciSequence = (maxNum) => {
    let fibonacciSequences = [0, 1, 1, 2];
    const seqAddition = fibonacciSequences.reverse();
    let maxSeqNum = seqAddition[0];
    do{
        const seqAdditionNext = seqAddition[0] + seqAddition[1];
        maxSeqNum = seqAdditionNext;
        if(maxSeqNum <= maxNum) {
            seqAddition.unshift(seqAdditionNext)
        }
    } while(maxSeqNum <= maxNum)
    return seqAddition.reverse();
}

console.log(getFibonacciSequence(40));

// Way 02:
const getFibonacciSequence = (maxNum) => {
    let fibonacciSequences = [0, 1];
    
    while(true) {
        const nextSeq = fibonacciSequences[fibonacciSequences.length - 1] + fibonacciSequences[fibonacciSequences.length -2];
        if(nextSeq >= maxNum) {
            break;
        }
        fibonacciSequences.push(nextSeq);
    }
    return fibonacciSequences;
}

console.log(getFibonacciSequence(40));


// 0005: Write a function that counts the number of vowels in a given string.
const countingVowels = (theString) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    
    for(let i = 0; i < theString.length; i++) {
        if(vowels.includes(theString[i].toLowerCase())) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

console.log(countingVowels('JavaScript'));


// 0006: Write a function that removes duplicate elements from an array.
const removeDuplicate = (nums) => {
    let filteredArray = [];
    for(let i = 0; i < nums.length; i++) {
        if(!filteredArray.includes(nums[i])) {
            filteredArray.push(nums[i]);
        }
    }
    return filteredArray;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));


// 0007: Palindrome Check:
const palindromeCheck = (theString) => {
    const reverseStr = theString.split('').reverse().join('').toLowerCase();
    if(reverseStr === theString.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromeCheck('Madam'));


// 0008: Find the Second Largest Number in an Array
const findingLargestNum = (arr) => {
    let largestNum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largestNum) {
            largestNum = arr[i]
        }
    }
    
    return largestNum;
}

const findingSecondLargest = (arr) => {
    const largestNum = findingLargestNum(arr);
    let secondLargestNum = 0;
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== largestNum) {
            newArr.push(arr[i]);
        }
    }
    secondLargestNum = findingLargestNum(newArr);
    
    return secondLargestNum;
}

console.log(findingSecondLargest([7, 11, 34, 21]));


// 0009: Sum of Digits of a Number
const getSumOfNum = (num) => {
    const numArr = num.toString().split('');
    let newNumArr = [];
    for(let i = 0; i < numArr.length; i++) {
        newNumArr.push(Number(numArr[i]));
    }
    const calcNum = newNumArr.reduce((acc, current) => acc + current);
    return calcNum
}

console.log(getSumOfNum(1234));



// 0010: Capitalize the First Letter of Each Word in a String
const getCapitalize = (str) => {
    const firstLetter = str.charAt(0).toUpperCase();
    const restLetter = str.slice(1)
    return firstLetter + restLetter;
}

const getCapitalizeStr = (str) => {
    const strArr = str.split(' ');
    let newArr = [];
    
    for(let i = 0; i < strArr.length; i++) {
        newArr.push(getCapitalize(strArr[i]));
    }
    const capStr = newArr.join(' ')
    return capStr;
}

console.log(getCapitalizeStr('javascript is awesome'));


// 0011: Check if Two Strings are Anagrams
// Way 01:
const checkAnagrams = (str1, str2) => {
    str1Arr = str1.split('');
    str2Arr = str2.split('');
    let result = true;
    
    for(let i = 0; i < str1Arr.length; i++) {
        if(str2Arr.includes(str1Arr[i])) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    
    return result;
}

console.log(checkAnagrams('lipten', 'silent'))

// Way 02:
const checkAnagrams = (str1, str2) => {
    sortedStr1 = str1.toLowerCase().split('').sort().join('');
    sortedStr2 = str2.toLowerCase().split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

console.log(checkAnagrams('listen', 'silent'))



// 0012: Merge Two Sorted Arrays
const mergeNSortArr = (arr1, arr2) => {
    let newArr = [];
    
    for(let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    
    for(let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i])
    }
    
    return newArr.sort();
}

console.log(mergeNSortArr([2, 1, 3, 4], [6, 5, 9, 8, 7]));



// 0013
// For input = [1, 2, 1], elementToReplace = 1 and subtrationElem = 3,
// The output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3]
function arrayReplace(inputArray, elementToReplace, substrationElem) {
    inputArray.forEach((element, index) => {
        if(element === elementToReplace) {
            inputArray[index] = substrationElem;
        }
    })
    console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);


// 0014
// Give a rectangular matrix of characters, add a border of astericks(*) to it. 
// For picture = ["abc", "ded"] and the output should be = ["******", "*abc*", "*ded*", "*****"]
const addBorder = (pictures) => {
    let wall = "*".repeat(pictures[0].length + 2)
    pictures.unshift(wall);
    pictures.push(wall);
    for(let i = 1; i < pictures.length -1; i++) {
        pictures[i] = "*".concat(pictures[i], "*");
    }
    return pictures;
}

console.log(addBorder(["abc", "ded"]));



// 0015
// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array
// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array
const checkSequence = (arr) => {
    let newArr = [];
    for(let i = 1; i <= arr.length; i++) {
        newArr.push(i);
    }
    const arraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((value, index) => value === arr2[index]);
    };
    if (arraysEqual(newArr, arr)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSequence([1, 2, 3, 4]));



// 0020: Factorial Number Checker
const factorialNum = (num) => {
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorialNum(0));


// 0021: Find longest Word in an array
const longestWordChecker = (arr) => {
    let longestWord = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(longestWordChecker(['I', 'Am', 'Going', 'To', 'Rule', 'The', 'World']));



// 0022: Find longest word from a sentence
const findLongestWord = (str) => {
    const words = str.split(' ');
    words.sort((a, b) => b.length - a.length);
    return words[0];
}

const sentence1 = "The quick brown fox jumps over the lazy dog";
const sentence2 = "Python is awesome programming language";
console.log(findLongestWord(sentence1));
console.log(findLongestWord(sentence2));



// 0023: Sum all numbers in a range.
function sumAllNumbersInRange(start, end) {
    const min = Math.min(start, end);
    const max = Math.max(start, end);

    // return ((max - min + 1) * (min + max)) / 2;
    let result = 0;
    for(let i = min; i <= max; i++) {
        result += i;
    }
    return result;
}

console.log(sumAllNumbersInRange(1, 5));
console.log(sumAllNumbersInRange(5, 1));


// 0024: Finding Largest Number in an Array
function findingLargestNum(numArr) {
    let largestNum = 0;
    for(let i = 0; i < numArr.length; i++) {
        if(largestNum < numArr[i]) {
            largestNum = numArr[i];
        }
    }
    return largestNum;
}

console.log(findingLargestNum([4, 2, 12, 15, 11, 22, 1]));



// 0025: Confirm the ending of a string.
function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}

console.log(confirmEnding("OpenAI is amazing", "amazing"));
console.log(confirmEnding("Hello, world!", "world"));


// 0026: Repeat a string a specified number of times
function repeatString(str, num) {
    return num > 0 ? str.repeat(num) : "";
}

console.log(repeatString("abc", 9));
console.log(repeatString("xyz", 0));
