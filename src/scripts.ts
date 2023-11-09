import $ from 'jquery';
import sum from './utils/sum/sum';
import { NumericLiteral } from 'typescript';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const sumNumbers = (a:number, b: number): number => a + b;

console.log(sumNumbers(1,2)) // 3
console.log(sumNumbers(1,10)) // 11
console.log(sumNumbers(99,1)) // 100

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const valueType = (a: any) => typeof(a);

console.log(valueType(1)) // 'number'
console.log(valueType(false)) // 'boolean'
console.log(valueType({})) // 'object'
console.log(valueType(null)) // 'object'
console.log(valueType('string')) // 'string'
console.log(valueType(['array'])) // 'object'

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
const equalValues = (a: number | string, b: number | string): boolean => a === b;

console.log(equalValues(2, 3)) // 'false'
console.log(equalValues(3, 3)) // 'true'
console.log(equalValues(1, '1')) // 'false'
console.log(equalValues('10', '10')) // 'true'

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
const findCharacter = (a: string, n: number): string => a.charAt(n-1);

console.log(findCharacter('abcd', 1)) // Expected 'a'
console.log(findCharacter('zyxbwpl', 5)) // Expected 'w'
console.log(findCharacter('gfedcba',3)) // Expected 'e'

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
const removeFirstChars = (a: string): string | number => a.replace(a.slice(0,3),"");

console.log(removeFirstChars('abcdefg')) // Expected 'defg'
console.log(removeFirstChars('1234')) // Expected '4'
console.log(removeFirstChars('fgedcba')) // Expected 'dcba'

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
const extractCharacter = (a: string): string | number => a.slice(-3);

console.log(extractCharacter('abcdefg')) // Expected 'efg'
console.log(extractCharacter('1234')) // Expected '234'
console.log(extractCharacter('fgedcba')) // Expected 'cba'

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
const getCharacters = (a: string): string | number => a.slice(0,3);

console.log(getCharacters('abcdefg')) // Expected 'abc'
console.log(getCharacters('1234')) // Expected '123'
console.log(getCharacters('fgedcba')) // Expected 'fge'

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
const getHalf = (a:string): string | number => a.slice(0,(Math.floor(a.length/2)));

console.log(getHalf('abcdefg')) // Expected 'abcd'
console.log(getHalf('1234')) // Expected '12'
console.log(getHalf('gedcba')) // Expected 'ged'

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
const removeLastChars = (a: string): string | number => a.replace(a.slice(-3),"");

console.log(removeLastChars('abcdefg')) // Expected 'abcd'
console.log(removeLastChars('1234')) // Expected '1234'
console.log(removeLastChars('fgedcba')) // Expected 'fged'

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const percentageOfNumber = (a:number, b:number): number => ((a * b)/100);

console.log(percentageOfNumber(100,50)) // Expected 50
console.log(percentageOfNumber(10,1)) // Expected 0.1
console.log(percentageOfNumber(500,25)) // Expected 125

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
const kishMish = (a: number, b: number, c: number, d:number, e: number, f: number): number => Math.pow(((((a + b) - c) * d) / e), f);

console.log(kishMish(6,5,4,3,2,1)) // Expected 10.5
console.log(kishMish(6,2,1,4,2,3)) // Expected 2744
console.log(kishMish(2,3,6,4,2,3)) // Expected -8

// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const evenNumb = (a: number): boolean => a % 2 === 0;

console.log(evenNumb(10)) // Expected true
console.log(evenNumb(-4)) // Expected true
console.log(evenNumb(5)) // Expected false
console.log(evenNumb(-111)) // Expected false

// Task 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
const countLetters = (a: string, b: string): number => {
	let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === a) {
      count++;
    }
		}
  return count;
}

console.log(countLetters('m', 'how many times does the character occur in this sentence?')) // Expected 2
console.log(countLetters('h', 'how many times does the character occur in this sentence?')) // Expected 4
console.log(countLetters('?', 'how many times does the character occur in this sentence?')) // Expected 1
console.log(countLetters('z', 'how many times does the character occur in this sentence?')) // Expected 0

// Task 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
const wholeNumbCheck = (a: number): boolean => a === Math.floor(a);

console.log(wholeNumbCheck(4)) // Expected true
console.log(wholeNumbCheck(1.123)) // Expected false
console.log(wholeNumbCheck(1048)) // Expected true
console.log(wholeNumbCheck(10.48)) // Expected false

// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
const divideOrMultiply = (a: number, b: number): number => a < b ? a / b : a * b;

console.log(divideOrMultiply(10, 100)) // Expected 0.1
console.log(divideOrMultiply(90, 45)) // Expected 4050
console.log(divideOrMultiply(8, 20)) // Expected 0.4
console.log(divideOrMultiply(2, 0.5)) // Expected 1

// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
const concatStr = (a: string, b: string): string => (a.includes(b) ? b + a : a + b);;

console.log(concatStr('cheese', 'cake')) // Expected 'cheesecake'
console.log(concatStr('lips', 's')) // Expected 'slips'
console.log(concatStr('Java', 'script')) // Expected 'Javascript'
console.log(concatStr(' think, therefore I am', 'I')) // Expected 'I think, therefore I am'

// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
const roundNum = (a: number): number => parseFloat(a.toFixed(2));

console.log(roundNum(2.12397)) // Expected 2.12
console.log(roundNum(3.136)) // Expected 3.14
console.log(roundNum(1.12397)) // Expected 1.12
console.log(roundNum(26.1379)) // Expected 26.14

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
const splitToArray = (a: number): number[] => a.toString().split('').map(Number);

console.log(splitToArray(10)) // Expected [1,0]
console.log(splitToArray(931)) // Expected [9,3,1]
console.log(splitToArray(193278)) // Expected [1,9,3,2,7,8]

// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
const clearAndSplit = (a: string, b: string): string => a.replace(/[^a-zA-Z]/g, '') + b.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');

console.log(clearAndSplit('java', 'tpi%rcs')) // Expected 'Javascript'
console.log(clearAndSplit('c%ountry', 'edis')) // Expected 'Countryside'
console.log(clearAndSplit('down', 'nw%ot')) // Expected 'Downtown'
