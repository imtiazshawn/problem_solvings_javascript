// 0001: Write a function that takes a string as input and returns the string reversed.
const reverseStr = (input) => {
    const reverseOutput = input.split('').reverse().join('');
    return reverseOutput;
}

const output = reverseStr("Hello");
console.log(output);
