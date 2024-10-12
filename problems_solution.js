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
