"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var sum_1 = require("./utils/sum/sum");
console.log('Ready for coding');
console.log('Body jQuery node:', (0, jquery_1.default)('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', (0, sum_1.default)(2, 3));
// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
var sumNumbers = function (a, b) { return a + b; };
console.log(sumNumbers(1, 2)); // 3
console.log(sumNumbers(1, 10)); // 11
console.log(sumNumbers(99, 1)); // 100
