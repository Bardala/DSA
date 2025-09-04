const br = str => (str ? console.log('\n', '\t####', str, '####', '\n') : console.log('\n'));
const p = str => console.log(str);

let string = 'Hello World';
// console.log(typeof string[1]);
// console.log(typeof string[-1]); // undefined
// console.log(typeof string[333]); // undefined

// console.log(typeof string.charAt(7));
// console.log(typeof string.charAt(-1)); // empty string
// console.log(typeof string.charAt(8888888)); // empty string
string = string.concat(', ', 'This is my zprogram', ', I can put a lot of strings here');
console.log(string);

console.log(string.indexOf('l'));
console.log(string.indexOf('l', 5));
console.log(string.lastIndexOf('e'));

br();

console.log(string.indexOf(',')); // 11
console.log(string.slice(13));
console.log(string.indexOf(',', string.indexOf(',') + 1)); // 31

console.log(string.slice(string.indexOf(','), string.indexOf(',', string.indexOf(',') + 1)));

console.log(string.slice(-(string.length - 2)));
console.log(string.slice(2));
br();

console.log(string.substr(2, 13));
console.log(string.substr(-2));
br();

console.log(string.slice(2));
console.log(string.substring(2));
br();

console.log(string.substring(2, 11));
console.log(string.substr(2, 11));
br();

console.log(string.substring(-9)); // It Doesn't accept -ve values
br();

console.log(string.replace('World', 'Universe'));
console.log(string.replace(',', '-'));
console.log(string.replaceAll(',', '-'));
console.log(string);
br();

console.log(string.toUpperCase());
console.log(string.toLowerCase());
br();

p(string.split(','));
p(string.split(' '));
br();

string = '       '.concat(string.concat('    '));
p(string);
string = string.trim();
p(string);
br();

console.log('undefined'.concat(string).startsWith(undefined));
console.log('4'.concat(string).startsWith(4));
p(string.endsWith('e'));
br();

p(string.includes('H'));

br('Repeat');
console.log(string.repeat(0));
console.log(string.repeat(1));
console.log(string.repeat(2));

br('padStart');
console.log(string.padStart(100));
console.log(string.padStart(100, '*'));

br('padEnd');
console.log(string.padEnd(100, '*'));
