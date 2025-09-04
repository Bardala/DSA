// String Methods Review

// 1. length: Returns the length of a string
let string = 'Hello, World!';
console.log(str.length); // Output: 13

// 2. charAt: Returns the character at a specified index
console.log(str.charAt(0)); // Output: H

// 3. concat: Concatenates two or more strings
const str2 = 'Welcome';
console.log(str.concat(', ', str2)); // Output: Hello, World! Welcome

// 4. indexOf: Returns the index of the first occurrence of a specified value in a string
console.log(str.indexOf('o')); // Output: 4

// 5. lastIndexOf: Returns the index of the last occurrence of a specified value in a string
console.log(str.lastIndexOf('o')); // Output: 8

// 6. slice: Extracts a section of a string and returns a new string
console.log(str.slice(7, 12)); // Output: World

// 7. substr: Extracts a specified number of characters from a string, starting at a specified index
console.log(str.substr(7, 5)); // Output: World

// 8. replace: Searches a string for a specified value, and returns a new string where the specified value is replaced with another value
console.log(str.replace('World', 'Universe')); // Output: Hello, Universe!

// 9. toUpperCase: Converts a string to uppercase letters
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// 10. toLowerCase: Converts a string to lowercase letters
console.log(str.toLowerCase()); // Output: hello, world!

// 11. split: Splits a string into an array of substrings
console.log(str.split(', ')); // Output: ['Hello', 'World!']

// 12. trim: Removes whitespace from both ends of a string
const str3 = '   Hello, World!   ';
console.log(str3.trim()); // Output: Hello, World!

// 13. startsWith: Checks if a string starts with a specified value
console.log(str.startsWith('Hello')); // Output: true

// 14. endsWith: Checks if a string ends with a specified value
console.log(str.endsWith('World!')); // Output: true

// 15. includes: Checks if a string contains a specified value
console.log(str.includes('World')); // Output: true

// 16. repeat: Returns a new string with a specified number of copies of an existing string
console.log(str.repeat(2)); // Output: Hello, World!Hello, World!

// 17. padStart: Pads the current string with another string until the resulting string reaches the specified length
console.log(str.padStart(20, 'x')); // Output: xxxxxxxHello, World!

// 18. padEnd: Pads the current string with another string until the resulting string reaches the specified length
console.log(str.padEnd(20, 'x')); // Output: Hello, World!xxxxxxx

// 19. match: Searches a string for a match against a regular expression, and returns the matches
const regex = /Hello/g;
console.log(str.match(regex)); // Output: ['Hello']

// 20. search: Searches a string for a specified value, and returns the position of the match
console.log(str.search('World')); // Output: 7

// 21. matchAll: Returns an iterator of all results matching a string against a regular expression (useful for iterating over matches)
const regex2 = /o/g;
const matches = str.matchAll(regex2);
for (const match of matches) {
  console.log(match);
}

// 22. localeCompare: Compares two strings in the current locale
const str4 = 'apple';
const str5 = 'banana';
console.log(str4.localeCompare(str5)); // Output: -1

// These are just a few examples of the many string methods available in JavaScript.
