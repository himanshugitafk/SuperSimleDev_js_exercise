// Math is a built-in global object that has properties and methods for mathematical constants and functions.
// round is a method of the Math object. It is used to round a number to the nearest integer.
// here we used it for calculating the taxes toavoid folating pt. inaccuracy also mind the parenthesis in these calculations.
Math.round((2095 + 799 + (1899 + 499)) * 0.1) / 100;
