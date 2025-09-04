/*
 * *Regular Expression
 * Methods:
 * 1. test()
 * 2. exec()
 * 3. match()
 * 4. replace()
 * 5. replaceAll()
 */

/**Summary */
// /abc/ A sequence of characters
// /[abc]/ Any character from a set of characters
// /[^abc]/ Any character not in a set of characters
// /[0-9]/ Any character in a range of characters
// /x+/ One or more occurrences of the pattern x
// /x+?/ One or more occurrences, nongreedy
// /x*/ Zero or more occurrences
// /x?/ Zero or one occurrence
// /x{2,4}/ Two to four occurrences
// /(abc)/ A group
// /a|b|c/ Any one of several patterns
// /\d/ Any digit character
// /\w/ An alphanumeric character (“word character”)
// /\s/ Any whitespace character
// /./ Any character except newlines
// /\b/ A word boundary
// /^/ Start of input
// /$/ End of input

const br = str => (str ? console.log('\n', '\t####', str, '####', '\n') : console.log('\n'));

console.log(/abc/.test('abcde'));
console.log(/abc/.test('abfcde'));

br();

//  Characters 0 to 9 sit right next to
// each other in this ordering (codes 48 to 57)

console.log(/[0123456789]/.test('in 1992'));
console.log(/[0-9]/.test('in 1992'));

console.log(/\d/.test('1234'));
console.log(/\w/.test('word'));
console.log(/\s/.test(' '));

// \d Any digit character
// \w An alphanumeric character (“word character”)
// \s Any whitespace character (space, tab, newline, and similar)
// \D A character that is not a digit
// \W A nonalphanumeric character
// \S A nonwhitespace character
// . Any character except for newline

function isAlphanumeric(string) {
  for (let char of string) {
    if (!/\w/i.test(char)) return false;
    // if (/\d/.test(char)) return false;
  }
  return true;
}

console.log('Is Alphanumeric? ', isAlphanumeric('testAlphanumeric'));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
let date = '01-30-2003 15:20';
console.log(dateTime.test('01-30-2003 15:20'));
// → true
console.log(dateTime.test('30-jan-2003 15:20'));
// → false

br('(^) invert');
let notBinary = /[^01]/;
console.log(notBinary.test('0100000011101'));
console.log(notBinary.test('01000000111201'));

br('/d+/ matches one or more digit characters');

console.log(/\d+/.test('123')); // true
console.log(/\d+/.test('')); // false
console.log(/\d*/.test('123')); // true
console.log(/\d*/.test('')); // true

br('?: optional, 0 or 1');
let neighbor = /neighbou?r/;
console.log(neighbor.test('neighbor')); // true
console.log(neighbor.test('neighbour')); // true

br('{}: Indicate that a pattern should occur a precise number of times');
// {2,4} means the element must occur at least twice and at most four
dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
console.log(dateTime.test('01-30-2003 15:20')); // true

br('Grouping Subexpressions');
// *A part of a regular expression that is enclosed in parentheses counts as a single elementz
let cartoonCrying = /boo+(hoo+)+/i; // i for case insensitive
console.log(cartoonCrying.test('Boohooooooohoohooo'));

/*
  * Matches and groups 
  exec method
  match method
*/
br('Matches and groups');
let match = /\d+/.exec('one two 100');
console.log(match); // [ '100', index: 8, input: 'one two 100', groups: undefined ]

console.log('one two 100'.match(/\d+/)); // [ '100', index: 8, input: 'one two 100', groups: undefined ]
br();

let quotedText = /"([^"]*)"/;
console.log(quotedText.exec('She said "hello"'));

console.log(/bad(ly)?/.exec('bad')); // ['bad', undefined]
console.log(/bad(ly)?/.exec('badly')); //  ['badly', 'ly']

console.log('123'.match(/(\d)+/)); // ['123', '3']
console.log('123'.match(/(\d+)/)); // ['123', '123']

// Groups can be useful for extracting parts of a string. If we don’t just
// want to verify whether a string contains a date but also extract it and
// construct an object that represents it, we can wrap parentheses around
// the digit patterns and directly pick the date out of the result of exec

/**
 * *Date Class
 */
br('Date Class');

console.log(new Date()); // 2024-06-20T13:59:00.788Z
console.log(new Date().getTime()); // 1718892026273

console.log(new Date(2013, 11, 19).getTime()); // 1387404000000
console.log(new Date(1387404000000)); // 2013-12-18T22:00:00.000Z

br();

function getDate(string) {
  let [_, day, month, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}

console.log(getDate('safd sadfasd d21-6-2024sadf'));
// 2024-06-20T21:00:00.000Z
console.log(getDate('99-20-3000'));
// 3001-11-06T22:00:00.000Z

// console.log(getDate('99 - 20 - 3000')); // error
/**
 * *Word and string boundaries
 * ^: Matches the start of input string.
 * $: Matches the end.
 * \b: word boundary, start with or end with
 */
br('Word and string boundaries');

// /^\d+$/ matches a string consisting entirely of one or more digits
console.log(/^\d+$/.test('string4')); // false
console.log(/^\d+$/.test('4string4')); // false
console.log(/^\d+$/.test('4444432342')); // true

// So to check if a string starts with x use this Regex:
let isStartWithX = /^x/;
// /x^/ : Doesn't match any string; there can't be an x before the start of the string.

console.log(isStartWithX.test('xxxfdsasfd'));
console.log(isStartWithX.test('axxxxxxxxx32df')); // false

let isEndWithExclamation = /!$/;
console.log(isEndWithExclamation.test('How!')); // true
console.log(isEndWithExclamation.test('!!!!H!!ow')); // false

// \b: word boundary
console.log(/cat/.test('concatenate')); // true
console.log(/\bcat\b/.test('concatenate')); // false
console.log(/\bcat\b/.test('cat ...')); // true
console.log(/\bcat\b/.test('Where is my cat')); // true

/**
 * * CHOICE PATTERNS
 * |
 */
br('Choice Patterns');

let animalCount = /\b\d+ (pig|chicken|cow)s?\b/;

console.log(animalCount.test('15 cows')); // true
console.log(animalCount.test('16 pigcows')); // false

/**
 * *Backtracking
 */
br('Backtracking');

let numReg = /\b([01]+b|[\da-f]+h|\d+)\b/;
let decimal = '132';
let binary = '011011b';
let hexadecimal = '398ah';

console.log(numReg.test(decimal));
console.log(numReg.test(hexadecimal));
console.log(numReg.test(binary));

console.log(/^.*x/.test('abcxe'));

/**
 * *Replace Method
 */
br('Replace Method');

console.log('papa'.replace('p', 'm')); // mapa
console.log('papa'.replace(/p/, 'm')); // mapa
console.log('papa'.replace(/p/g, 'm')); // mama

console.log('Borobudur'.replace(/[ou]/, 'a')); // Barobudur;
console.log('Borobudur'.replace(/[ou]/g, 'a')); // Barabadar;

let names = 'Liskov, Barbara\nMcCarthy, John\nWadler, Philip';
console.log(names.replace(/(\w+), (\w+)/g, '$2 $1')); // up to $9 groups

let s = 'the cia and fbi';
console.log(s.replace(/\b(cia|fbi)\b/g, str => str.toUpperCase()));
// the CIA and FBI

console.log('the cia andfbi'.replace(/(cia|fbi)/g, str => str.toUpperCase()));
// the CIA andFBI
br();

let stock = '1 lemon, 2 cabbages, 100 eggs';

function minusOne(_match, amount, unit) {
  amount = Number(amount) - 1;

  if (amount == 0) {
    amount = 'no';
  } else if (amount == 1) {
    unit = unit.slice(0, unit.length - 1);
  }

  return amount + ' ' + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

/**
 * *Greed
 */
br('Greed');

//
/* */
/** */
/**
 *
 */

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[.*]\*\//, '');
}

console.log(stripComments('1 + /* 2 */3'));
