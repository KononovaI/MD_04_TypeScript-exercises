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

console.log(sumNumbers(1,2)); // 3
console.log(sumNumbers(1,10)); // 11
console.log(sumNumbers(99,1)); // 100

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const valueType = (a: any) => typeof(a);

console.log(valueType(1)); // 'number'
console.log(valueType(false)); // 'boolean'
console.log(valueType({})); // 'object'
console.log(valueType(null)); // 'object'
console.log(valueType('string')); // 'string'
console.log(valueType(['array'])); // 'object'

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
const equalValues = (a: number | string, b: number | string): boolean => a === b;

console.log(equalValues(2, 3)); // 'false'
console.log(equalValues(3, 3)); // 'true'
console.log(equalValues(1, '1')); // 'false'
console.log(equalValues('10', '10')); // 'true'

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
const findCharacter = (a: string, n: number): string => a.charAt(n-1);

console.log(findCharacter('abcd', 1)); // Expected 'a'
console.log(findCharacter('zyxbwpl', 5)); // Expected 'w'
console.log(findCharacter('gfedcba',3)); // Expected 'e'

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
const removeFirstChars = (a: string): string | number => a.replace(a.slice(0,3),"");

console.log(removeFirstChars('abcdefg')); // Expected 'defg'
console.log(removeFirstChars('1234')); // Expected '4'
console.log(removeFirstChars('fgedcba')); // Expected 'dcba'

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
const extractCharacter = (a: string): string | number => a.slice(-3);

console.log(extractCharacter('abcdefg')); // Expected 'efg'
console.log(extractCharacter('1234')); // Expected '234'
console.log(extractCharacter('fgedcba')); // Expected 'cba'

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
const getCharacters = (a: string): string | number => a.slice(0,3);

console.log(getCharacters('abcdefg')); // Expected 'abc'
console.log(getCharacters('1234')); // Expected '123'
console.log(getCharacters('fgedcba')); // Expected 'fge'

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
const getHalf = (a:string): string | number => a.slice(0,(Math.floor(a.length/2)));

console.log(getHalf('abcdefg')); // Expected 'abcd'
console.log(getHalf('1234')); // Expected '12'
console.log(getHalf('gedcba')); // Expected 'ged'

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
const removeLastChars = (a: string): string | number => a.replace(a.slice(-3),"");

console.log(removeLastChars('abcdefg')); // Expected 'abcd'
console.log(removeLastChars('1234')); // Expected '1234'
console.log(removeLastChars('fgedcba')); // Expected 'fged'

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const percentageOfNumber = (a:number, b:number): number => ((a * b)/100);

console.log(percentageOfNumber(100,50)); // Expected 50
console.log(percentageOfNumber(10,1)); // Expected 0.1
console.log(percentageOfNumber(500,25)); // Expected 125

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
const kishMish = (a: number, b: number, c: number, d:number, e: number, f: number): number => Math.pow(((((a + b) - c) * d) / e), f);

console.log(kishMish(6,5,4,3,2,1)); // Expected 10.5
console.log(kishMish(6,2,1,4,2,3)); // Expected 2744
console.log(kishMish(2,3,6,4,2,3)); // Expected -8

// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const evenNumb = (a: number): boolean => a % 2 === 0;

console.log(evenNumb(10)); // Expected true
console.log(evenNumb(-4)); // Expected true
console.log(evenNumb(5)); // Expected false
console.log(evenNumb(-111)); // Expected false

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

console.log(countLetters('m', 'how many times does the character occur in this sentence?')); // Expected 2
console.log(countLetters('h', 'how many times does the character occur in this sentence?')); // Expected 4
console.log(countLetters('?', 'how many times does the character occur in this sentence?')); // Expected 1
console.log(countLetters('z', 'how many times does the character occur in this sentence?')); // Expected 0

// Task 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
const wholeNumbCheck = (a: number): boolean => a === Math.floor(a);

console.log(wholeNumbCheck(4)); // Expected true
console.log(wholeNumbCheck(1.123)); // Expected false
console.log(wholeNumbCheck(1048)); // Expected true
console.log(wholeNumbCheck(10.48)); // Expected false

// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
const divideOrMultiply = (a: number, b: number): number => a < b ? a / b : a * b;

console.log(divideOrMultiply(10, 100)); // Expected 0.1
console.log(divideOrMultiply(90, 45)); // Expected 4050
console.log(divideOrMultiply(8, 20)); // Expected 0.4
console.log(divideOrMultiply(2, 0.5)); // Expected 1

// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
const concatStr = (a: string, b: string): string => (a.includes(b) ? b + a : a + b);;

console.log(concatStr('cheese', 'cake')); // Expected 'cheesecake'
console.log(concatStr('lips', 's')); // Expected 'slips'
console.log(concatStr('Java', 'script')); // Expected 'Javascript'
console.log(concatStr(' think, therefore I am', 'I')); // Expected 'I think, therefore I am'

// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
const roundNum = (a: number): number => parseFloat(a.toFixed(2));

console.log(roundNum(2.12397)); // Expected 2.12
console.log(roundNum(3.136)); // Expected 3.14
console.log(roundNum(1.12397)); // Expected 1.12
console.log(roundNum(26.1379)); // Expected 26.14

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
const splitToArray = (a: number): number[] => a.toString().split('').map(Number);

console.log(splitToArray(10)); // Expected [1,0]
console.log(splitToArray(931)); // Expected [9,3,1]
console.log(splitToArray(193278)); // Expected [1,9,3,2,7,8]

// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
const clearAndSplit = (a: string, b: string): string => a.replace(/[^a-zA-Z]/g, '') + b.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');

console.log(clearAndSplit('java', 'tpi%rcs')); // Expected 'Javascript'
console.log(clearAndSplit('c%ountry', 'edis')); // Expected 'Countryside'
console.log(clearAndSplit('down', 'nw%ot')); // Expected 'Downtown'

// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

const returnPrime = (a: number, b: number): number => {
  if (isPrime(a)) {
    return a;
  } else {
    let nextPrime = a + 1;
    while (!isPrime(nextPrime)) {
      nextPrime++;
    }
    return nextPrime;
  }
};

console.log(returnPrime(38, 7)); // Expected 41
console.log(returnPrime(7, 115)); // Expected 7
console.log(returnPrime(115, 2000)); // Expected 127
console.log(returnPrime(2000, 5000)); // Expected 2003

// Task 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
const divisibleNum = (x: number, y: number): number => (x < 0) ? 0 : (x % y === 0) ? x : Math.ceil(x / y) * y;

console.log(divisibleNum(1, 23)); // Expected 23
console.log(divisibleNum(23, 23)); // Expected 23
console.log(divisibleNum(7, 3)); // Expected 9
console.log(divisibleNum(-5,7)); // Expected 0

// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
const insertToB = (a: string, b: string): string => {
  return a.replace(/(?=(...)+$)/g, b);
}

console.log(insertToB('1234567','.')); // Expected '1.234.567'
console.log(insertToB('abcde','$')); // Expected 'ab$cde'
console.log(insertToB('zxyzxyzxyzxyzxyz','w')); // 'zwxyzwxyzwxyzwxyzwxyz'

// Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
const nextLetter = (a: string): string => {
  return String.fromCharCode(a.charCodeAt(0) + 1);
};

const correctWord = (str: string): string => {
  let word = '';
  for (let i = 0; i < str.length; i++) {
    word += nextLetter(str[i]);
  }
  return word;
};

console.log(correctWord('bnchmf')); // Expected 'coding'
console.log(correctWord('bgddrd')); // Expected 'cheese'
console.log(correctWord('sdrshmf')); // Expected 'testing'

// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
const elementFromArray = (a: number[], n: number): number => a[n - 1];

console.log(elementFromArray([1,2,3,4,5],3)); // Expexted 3
console.log(elementFromArray([10,9,8,7,6],5)); // Expexted 6
console.log(elementFromArray([7,2,1,6,3],1)); // Expexted 7

// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
const removeFirstFromArr = (a: number[]): number [] => a.splice(3);

console.log(removeFirstFromArr([1,2,3,4])); // Expexted [4]
console.log(removeFirstFromArr([5,4,3,2,1,0])); // Expexted [2,1,0]
console.log(removeFirstFromArr([99,1,1])); // Expexted []

// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
const removeLastFromArr = (a: number[]): number [] => a.slice(-3);

console.log(removeLastFromArr([1,2,3,4])); // Expexted [2,3,4]
console.log(removeLastFromArr([5,4,3,2,1,0])); // Expexted [2,1,0]
console.log(removeLastFromArr([99,1,1])); // Expexted [99,1,1]

// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
const removeFirstNewArr = (a: number[]): number [] => a.slice(0, 3);

console.log(removeFirstNewArr([1,2,3,4])); // Expexted [1,2,3]
console.log(removeFirstNewArr([5,4,3,2,1,0])); // Expexted [5,4,3]
console.log(removeFirstNewArr([99,1,1])); // Expexted [99,1,1]*/

// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
//It should return the last n elements of a
const lastElementArr = (a: number[], n: number): number[] => a.splice(-n);

console.log(lastElementArr([1, 2, 3, 4, 5], 2)); // Expexted [4, 5]
console.log(lastElementArr([1, 2, 3], 6)); // Expexted [1, 2, 3]
console.log(lastElementArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Expexted [6, 7, 8]

// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
const filteredArr = (a: number[], b: number | string | boolean): number[] => (a.filter((element) => element !== b));

console.log(filteredArr([1, 2, 3], 2)); // Expexted [1, 3]
console.log(filteredArr([1,2,'2'],'2')); // Expexted [1, 2]
console.log(filteredArr([false,'2', 1], false)); // Expexted ['2', 1]
console.log(filteredArr([1,2,'2',1], 1)); // Expexted [2, '2']

// Task 30
// Task Write a function that takes an array (a) as argument
// Return the number of elements in a
const countOfElements = (a: number[]): number => a.length;

console.log(countOfElements([1, 2, 2, 4])); // Expexted 4
console.log(countOfElements([9,9,9])); // Expexted 3
console.log(countOfElements([4,3,2,1,0])); // Expexted 5

// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
const countOfNegativ = (a: number[]): number => (a.filter((number) => number < 0).length);

console.log(countOfNegativ([1,-2,2,-4])); // Expexted 2
console.log(countOfNegativ([0,9,1])); // Expexted 0
console.log(countOfNegativ([4,-3,2,1,0])); // Expexted 1

// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
const descendingArr = (a: number[]): number[] => a.slice().sort((a, b) => b - a);

console.log(descendingArr([1,3,2])); // Expexted [3,2,1]
console.log(descendingArr([4,2,3,1])); // Expexted [4,3,2,1]

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
const sortByAlpha = (a: string[]): string[] => a.slice().sort();

console.log(sortByAlpha(['b', 'c', 'd', 'a'])); // Expexted ['a', 'b', 'c', 'd']
console.log(sortByAlpha(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // Expexted ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
const avgOfNumbers = (a: numbers[]): number =>  a.reduce((acc, curr) => acc + curr, 0) / a.length;

console.log(avgOfNumbers([10,100,40])); // Expected 50
console.log(avgOfNumbers([10,100,1000])); // Expected 370
console.log(avgOfNumbers([-50,0,50,200])); // Expected 50

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string
const longestString = (arr: string[]): string => arr.reduce((longest, current) => (current.length > longest.length) ? current : longest, '');

console.log(longestString(['help', 'me'])); // Expected 'help'
console.log(longestString(['I', 'need', 'candy'])); // Expected 'candy'

// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
const checkEqualElements = (arr: any[]) : boolean => arr.every((element) => element === arr[0]);

console.log(checkEqualElements([true, true, true, true])); // Expected true
console.log(checkEqualElements(['test', 'test', 'test'])); // Expected true
console.log(checkEqualElements([1,1,1,2])); // Expected false
console.log(checkEqualElements(['10',10,10,10])); // Expected false

// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
const mergeArrays = (...arrays: any[]) => [].concat(...arrays);

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Expected [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6])); // Expected (['a', 'b', 'c'], [4, 5, 6])
console.log(mergeArrays([true, true], [1, 2], ['a', 'b'])); // Expected [true, true, 1, 2, 'a', 'b']

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
const sortedArr = (arr) => arr.slice().sort((a, b) => a.b - b.b);

console.log(sortedArr([{a:1,b:2},{a:5,b:4}])); // Expected [{a:1,b:2},{a:5,b:4}]
console.log(sortedArr([{a:2,b:10},{a:5,b:4}])); // Expected [{a:5,b:4},{a:2,b:10}]
console.log(sortedArr([{a:1,b:7},{a:2,b:1}])); // Expected [{a:2,b:1},{a:1,b:7}]

// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
const mergeAndRemoveDuplicates = (arr1: number[], arr2:number[]) => [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);

console.log(mergeAndRemoveDuplicates([1, 2, 3], [3, 4, 5])); // Expected [1, 2, 3, 4, 5]
console.log(mergeAndRemoveDuplicates([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // Expected [ -11, -10, 5, 22, 41,  42, 333]

// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
const sumUpWithGreaterValue = (a: number[], b: number) => a.reduce((sum, element) => element > b ? sum + element : sum, 0);

console.log(sumUpWithGreaterValue([1, 2, 3, 4, 5, 6, 7], 2)); // Expected 25
console.log(sumUpWithGreaterValue([-10, -11, -3, 1, -4], -3)); // Expected 1
console.log(sumUpWithGreaterValue([78, 99, 100, 101, 401], 99)); // Expected 602

// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
const minMaxRange = (num1: number, num2: number): number[] => Array.from({ length: num2 - num1 + 1 }, (_, i) => i + num1);

console.log(minMaxRange(2, 10)); // Expected [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(minMaxRange(1, 3)); // Expected [1, 2, 3]
console.log(minMaxRange(-5, 5)); // Expected [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(minMaxRange(2, 7)); // Expected [2, 3, 4, 5, 6, 7]

// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
const groupedObject = (arr: any) => arr.reduce((obj, str) => ({ ...obj, [str[0].toLowerCase()]: (obj[str[0].toLowerCase()] || []).concat(str) }), {});

console.log(groupedObject(['Alf', 'Alice', 'Ben'])); // Expected { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupedObject(['Ant', 'Bear', 'Bird'])); // Expected { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupedObject(['Berlin', 'Paris', 'Prague'])); // Expected { b: ['Berlin'], p: ['Paris', 'Prague']}

// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
const myFunction = (arr: number[] | string[] | boolean[], num: number) => [num >= 6 ? num : 0, ...arr];

console.log(myFunction([1, 2, 3], 6)); // Expected [6, 1, 2, 3]
console.log(myFunction(['a', 'b'], 2)); // Expected [0, 'a', 'b']
console.log(myFunction([null, false], 11)); // Expected: [11, null, false]

// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
const nthElementNewArr = (arr: any[], n: number) => arr.filter((_, i) => (i + 1) % n === 0);

console.log(nthElementNewArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Expected [3, 6, 9]
console.log(nthElementNewArr([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // Expected [6, 1]
console.log(nthElementNewArr([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // Expected [2, 6, 4, 8, 10]

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
const keyCountry = (inputObject: { country: any; }) => inputObject.country;

console.log(keyCountry({ continent: 'Asia', country: 'Japan' })); // Expected 'Japan'
console.log(keyCountry({ country: 'Sweden', continent: 'Europe' })); // Expected 'Sweden'

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor
const keyProp = (inputObject) => inputObject['prop-2'];

console.log(keyProp({ one: 1, 'prop-2': 2 })); // Expected 2
console.log(keyProp({ 'prop-2': 'two', prop: 'test' })); // Expected 'two'

// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
const equalKey = (inputObject, key) => inputObject[key];

console.log(equalKey({ continent: 'Asia', country: 'Japan'}, 'continent')); // Expected 'Asia'
console.log(equalKey({ country: 'Sweden', continent: 'Europe'}, 'country')); // Expected 'Sweden'

// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
const hasKey = (a, b) => a.hasOwnProperty(b);

console.log(hasKey({a:1, b:2, c:3}, 'b')); // Expected true
console.log(hasKey({x:'a', y:'b', z:'c'}, 'a')); // Expected false
console.log(hasKey({x:'a', y:'b', z:'c'}, 'z')); // Expected: true

// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
const createObjectKey = (a: object) => ({ key: a });

console.log(createObjectKey('a')); // Expected {key: 'a'}
console.log(createObjectKey('z')); // Expected {key:'z'}
console.log(createObjectKey('b')); // Expected {key:'b'}

// Task 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
const newObject = (a, b) => ({ [a]: b });

console.log(newObject('a', 'b')); // Expected { a: 'b' }
console.log(newObject('z', 'x')); // Expected { z: 'x' }
console.log(newObject('b', 'w')); // Expected { b: 'w' }

// Task 51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
const objectWithKeys = (a, b) => Object.fromEntries(a.map((key, index) => [key, b[index]]));

console.log(objectWithKeys(['a','b','c'], [1,2,3])); // Expected {a:1, b:2, c:3}
console.log(objectWithKeys(['w','x','y','z'], [10,9,5,2])); // Expected {w:10, x:9, y:5, z:2}
console.log(objectWithKeys([1,'b'], ['a',2])); // Expected {1:'a', b:2}

// Task 52
// Write a function that takes an object (a) as argument
// Return an array with all object keys
const sumOfObjectKeys = (a) => Object.keys(a);

console.log(sumOfObjectKeys({a:1,b:2,c:3})); // Expected ['a', 'b', 'c']
console.log(sumOfObjectKeys({j:9,i:2,x:3,z:4})); // Expected ['j', 'i', 'x', 'z']
console.log(sumOfObjectKeys({w:15,x:22,y:13})); // Expected ['w', 'x', 'y']

// Task 53
// Write a function that takes an object (a) as argument
// Return the sum of all object values
const sumObjectVal = (a) => Object.values(a).reduce((sum, value) => sum + value, 0);

console.log(sumObjectVal({a:1,b:2,c:3})); // Expected 6
console.log(sumObjectVal({j:9,i:2,x:3,z:4})); // Expected 18
console.log(sumObjectVal({w:15,x:22,y:13})); // Expected 50

// Task 54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
const removeObjectPropertyB = (obj) => {
  const { b, ...rest } = obj;
  return rest;
};

console.log(removeObjectPropertyB({ a: 1, b: 7, c: 3 })); // Expected { a: 1, c: 3 }
console.log(removeObjectPropertyB({ b: 0, a: 7, d: 8 })); // Expected { a: 7, d: 8 }
console.log(removeObjectPropertyB({ e: 6, f: 4, b: 5, a: 3 })); // Expected { e: 6, f: 4, a: 3 }

// Task 55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
const mergeAndCorrectObjects = (obj1, obj2) => {
  const { b, ...restObj2 } = obj2;
  return { ...obj1, ...restObj2, d: b };
};

console.log(mergeAndCorrectObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // Expected { a: 1, b: 2, c: 3, e: 5, d: 4 }
console.log(mergeAndCorrectObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // Expected { a: 5, b: 4, c: 3, e: 2, d: 1 }

// Task 56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
const excludePropertyB = (obj) => Object.fromEntries(Object.entries(obj).filter(([key]) => key !== 'b'));

console.log(excludePropertyB({ a: 1, b: 7, c: 3 })); // Expected { a: 1, c: 3 }
console.log(excludePropertyB({ b: 0, a: 7, d: 8 })); // Expected { a: 7, d: 8 }
console.log(excludePropertyB({ e: 6, f: 4, b: 5, a: 3 })); // Expected { e: 6, f: 4, a: 3 }

// Task 57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
const swapKeysAndValues = (obj) => {
  const swappedObject = {};
  for (const key in obj) {
    swappedObject[obj[key]] = key;
  }
  return swappedObject;
};

console.log(swapKeysAndValues({ z: 'a', y: 'b', x: 'c', w: 'd' })); // Expected { a: 'z', b: 'y', c: 'x', d: 'w' }
console.log(swapKeysAndValues({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })); // Expected { a: '2', b: '4', c: '6', d: '8' }
console.log(swapKeysAndValues({ a: 1, z: 24 })); // Expected { '1': 'a', '24': 'z' }

// Task 58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
const replaceEmptyWithNull = (obj) => {
  const resultObject = {};
  for (const key in obj) {
    const value = obj[key].trim();
    resultObject[key] = value === '' ? null : value;
  }
  return resultObject;
};

console.log(replaceEmptyWithNull({ a: 'a', b: 'b', c: '' })); // Expected { a: 'a', b: 'b', c: null }
console.log(replaceEmptyWithNull({ a: '', b: 'b', c: ' ', d: 'd' })); // Expected { a: null, b: 'b', c: null, d: 'd' }
console.log(replaceEmptyWithNull({ a: 'a', b: 'b ', c: ' ', d: '' })); // Expected { a: 'a', b: 'b ', c: null, d: null }

// Task 59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
const extractPersonalInfo = ({ fn, ln, size, weight }) => {
  const resultObject = { fn, ln };
  if (size !== undefined) {
    resultObject.size = `${size}cm`;
  }
  if (weight !== undefined) {
    resultObject.weight = `${weight}kg`;
  }
  return resultObject;
};

console.log(
  extractPersonalInfo({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 })
); // Expected { fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg' }
console.log(
  extractPersonalInfo({ fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 })
); // Expected { fn: 'Martin', ln: 'Harper', weight: '102kg' }
console.log(
  extractPersonalInfo({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 })
); // Expected { fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg' }
console.log(
  extractPersonalInfo({ fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de' })
); // Expected { fn: 'Matthew', ln: 'Müller' }

// Task 60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array
const addContinentToObjects = (objects, continent) =>
  objects.map(obj => ({ ...obj, continent }));

console.log(
  addContinentToObjects(
    [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }],
    'Asia'
  )
); // Expected [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

console.log(
  addContinentToObjects(
    [{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }],
    'Europe'
  )
); // Expected [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// Task 61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
const countOccurrences = (numbers) =>
  numbers.reduce((obj, number) => {
    obj[number] = (obj[number] || 0) + 1;
    return obj;
  }, {});

console.log(countOccurrences([1, 2, 2, 3])); // Expected {1: 1, 2: 2, 3: 1}
console.log(countOccurrences([9, 9, 9, 99])); // Expected {9: 3, 99: 1}
console.log(countOccurrences([4, 3, 2, 1])); // Expected {1: 1, 2: 1, 3: 1, 4: 1}

// Task 62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
const areDatesEqual = (date1, date2) => date1.getTime() === date2.getTime();

console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); // Expected false
console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // Expected true
console.log(areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // Expected false


// Task 63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
const daysBetweenDates = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const timeDifference = Math.abs(date1.getTime() - date2.getTime());
  const daysDifference = Math.floor(timeDifference / oneDay);
  return daysDifference;
};

console.log(daysBetweenDates(new Date('2020-06-11'), new Date('2020-06-01'))); // Expected 10
console.log(daysBetweenDates(new Date('2000-01-01'), new Date('2020-06-01'))); // Expected: 7457

// Task 64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
const isSameDay = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

console.log(isSameDay(new Date('2000/01/01'), new Date('2000/01/01'))); // Expected true
console.log(isSameDay(new Date('2000/01/01'), new Date('2000/01/02'))); // Expected false
console.log(isSameDay(new Date('2001/01/01'), new Date('2000/01/01'))); // Expected false
console.log(isSameDay(new Date('2000/11/01'), new Date('2000/01/01'))); // Expected false

// Task 65
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both arrays
const bothArrays = (arr1, arr2) => arr1.concat(arr2);

console.log(bothArrays([1, 2], [3, 4])); // Expected [1, 2, 3, 4]
console.log(bothArrays([1, 2], [3, 4, 5, 6])); // Expected [1, 2, 3, 4, 5, 6]

// Task 66
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element
const addString = (arr, str) => [...arr, str];

console.log(addString(['Apple', 'Orange', 'Banana'], 'Kiwi')); // Expected ['Apple', 'Orange', 'Banana', 'Kiwi']

// Task 67
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element
const addStringAtBeginning = (arr, str) => [str, ...arr];

console.log(addStringAtBeginning(['Apple', 'Orange', 'Banana'], 'Kiwi')); // Expected ['Kiwi', 'Apple', 'Orange', 'Banana']

// Task 68
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both objects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjects({ a:1, b:2 }, { c:3, d:4 })); // Expected { a:1, b:2, c:3, d:4 }
console.log(mergeObjects({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })); // Expected { a:1, b:2, c:3, d:4, e:5, f:6 }

// Task 69
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string
const addFavoriteMovie = (obj, movie) => ({ ...obj, favoriteMovie: movie });

console.log(addFavoriteMovie({ eyeColor: 'green', age: 10 }, 'Garfield')); // Expected { eyeColor: 'green', age: 10, favoriteMovie: 'Garfield' }
console.log(addFavoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight')); // Expected { eyeColor: 'blue', age: 15, favoriteMovie: 'Twilight' }