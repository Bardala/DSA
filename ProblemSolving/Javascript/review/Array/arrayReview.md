# The Ultimate JavaScript Array Guide

## Table of Contents

1. [Array Creation](#array-creation)
2. [Basic Operations](#basic-operations)
3. [Iteration Methods](#iteration-methods)
4. [Transformation Methods](#transformation-methods)
5. [Searching and Filtering](#searching-and-filtering)
6. [Array Manipulation](#array-manipulation)
7. [Sorting and Reordering](#sorting-and-reordering)
8. [Array Testing](#array-testing)
9. [Reduction Methods](#reduction-methods)
10. [Multi-dimensional Arrays](#multi-dimensional-arrays)
11. [Array Performance](#array-performance)
12. [Common Patterns](#common-patterns)

## Array Creation

### Basic Array Creation

```javascript
// Literal notation (most common)
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, { name: 'John' }];

// Constructor
const arr1 = new Array(); // []
const arr2 = new Array(5); // [empty × 5]
const arr3 = new Array(1, 2, 3); // [1, 2, 3]

// Array.of() - fixes constructor ambiguity
Array.of(5); // [5] NOT [empty × 5]
Array.of(1, 2, 3); // [1, 2, 3]

// Array.from() - from array-like or iterable objects
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]
```

### Special Array Creation Patterns

```javascript
// Create range
const range = (start, end, step = 1) =>
  Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => start + i * step);

range(1, 5); // [1, 2, 3, 4]
range(0, 10, 2); // [0, 2, 4, 6, 8]

// Fill arrays
const filled = Array(5).fill(0); // [0, 0, 0, 0, 0]
const matrix = Array(3)
  .fill()
  .map(() => Array(3).fill(0));
// [[0,0,0], [0,0,0], [0,0,0]]
```

## Basic Operations

### Access and Modification

```javascript
const arr = ['a', 'b', 'c', 'd'];

// Access
arr[0]; // 'a'
arr.at(-1); // 'd' (ES2022 - negative indexing)

// Modification
arr[1] = 'z'; // ['a', 'z', 'c', 'd']
arr.length = 2; // ['a', 'z'] - truncates array

// Check existence
arr.includes('a'); // true
arr.indexOf('c'); // -1 (not found after truncation)
```

### Length and Properties

```javascript
const arr = [1, 2, 3];

arr.length; // 3
arr.length = 5; // [1, 2, 3, empty × 2]
arr.length = 2; // [1, 2]

// Arrays are objects
arr.customProp = 'value'; // valid but not recommended
```

## Iteration Methods

### Basic Loops

```javascript
const numbers = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for...of loop (values)
for (const num of numbers) {
  console.log(num);
}

// for...in loop (keys - avoid for arrays)
for (const index in numbers) {
  console.log(numbers[index]);
}
```

### Functional Iteration Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - execute function for each element
numbers.forEach((num, index, array) => {
  console.log(`Index ${index}: ${num}`);
});

// map - transform each element
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - select elements that pass test
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// find/findIndex - find first element that passes test
const firstEven = numbers.find(num => num % 2 === 0); // 2
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // 1

// some/every - test if some/all elements pass test
const hasEven = numbers.some(num => num % 2 === 0); // true
const allEven = numbers.every(num => num % 2 === 0); // false
```

## Transformation Methods

### Map, Filter, Reduce Patterns

```javascript
const users = [
  { id: 1, name: 'John', age: 25, active: true },
  { id: 2, name: 'Jane', age: 30, active: false },
  { id: 3, name: 'Bob', age: 22, active: true },
];

// Chaining transformations
const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name)
  .sort(); // ['Bob', 'John']

// Complex transformation
const userSummary = users.map(user => ({
  id: user.id,
  displayName: `${user.name} (${user.age})`,
  isAdult: user.age >= 18,
}));
```

### Flat and FlatMap

```javascript
// flat - flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
nested.flat(); // [1, 2, 3, 4, [5, 6]]
nested.flat(2); // [1, 2, 3, 4, 5, 6]

// flatMap - map then flatten by 1 level
const sentences = ['Hello world', 'Good morning'];
const words = sentences.flatMap(sentence => sentence.split(' '));
// ['Hello', 'world', 'Good', 'morning']
```

## Searching and Filtering

### Basic Search Methods

```javascript
const fruits = ['apple', 'banana', 'orange', 'apple', 'mango'];

// indexOf/lastIndexOf
fruits.indexOf('apple'); // 0
fruits.lastIndexOf('apple'); // 3
fruits.indexOf('grape'); // -1

// includes
fruits.includes('banana'); // true

// find/findLast (ES2023)
const numbers = [1, 3, 5, 7, 9, 2];
numbers.findLast(n => n % 2 === 0); // 2
numbers.findLastIndex(n => n % 2 === 0); // 5
```

### Advanced Filtering

```javascript
const products = [
  { name: 'Laptop', price: 1000, category: 'electronics' },
  { name: 'Phone', price: 500, category: 'electronics' },
  { name: 'Book', price: 20, category: 'education' },
  { name: 'Chair', price: 150, category: 'furniture' },
];

// Multiple conditions
const affordableElectronics = products.filter(
  product => product.category === 'electronics' && product.price < 800
);

// Dynamic filtering
const createPriceFilter = (min, max) => products.filter(p => p.price >= min && p.price <= max);

// Remove duplicates
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(duplicates)]; // [1, 2, 3, 4, 5]
const uniqueObjects = Array.from(new Map(products.map(p => [p.name, p])).values());
```

## Array Manipulation

### Adding/Removing Elements

```javascript
let arr = [1, 2, 3];

// End operations
arr.push(4); // [1, 2, 3, 4] - returns new length
let last = arr.pop(); // [1, 2, 3] - returns 4

// Beginning operations
arr.unshift(0); // [0, 1, 2, 3] - returns new length
let first = arr.shift(); // [1, 2, 3] - returns 0

// Multiple elements
arr.push(4, 5, 6); // [1, 2, 3, 4, 5, 6]
arr.unshift(-1, 0); // [-1, 0, 1, 2, 3, 4, 5, 6]
```

### Splicing Arrays

```javascript
let arr = ['a', 'b', 'c', 'd', 'e'];

// splice(start, deleteCount, ...items)
let removed = arr.splice(1, 2); // ['b', 'c']
// arr is now ['a', 'd', 'e']

arr.splice(1, 0, 'x', 'y'); // Insert at index 1
// arr is now ['a', 'x', 'y', 'd', 'e']

arr.splice(2, 1, 'z'); // Replace at index 2
// arr is now ['a', 'x', 'z', 'd', 'e']
```

### Slicing and Concatenating

```javascript
const arr = [1, 2, 3, 4, 5];

// slice - extract portion (non-mutating)
arr.slice(1, 3); // [2, 3]
arr.slice(2); // [3, 4, 5]
arr.slice(-2); // [4, 5]
arr.slice(); // shallow copy

// concat - combine arrays (non-mutating)
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2, [5, 6]); // [1, 2, 3, 4, 5, 6]

// Spread operator (modern alternative)
const combined2 = [...arr1, ...arr2, 5, 6];
```

## Sorting and Reordering

### Basic Sorting

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2];
const fruits = ['banana', 'apple', 'cherry'];

// Default sort (lexicographical)
numbers.sort(); // [1, 1, 2, 3, 4, 5, 9] - but careful!
['10', '2', '1'].sort(); // ['1', '10', '2'] - string comparison!

// Numeric sort
numbers.sort((a, b) => a - b); // ascending
numbers.sort((a, b) => b - a); // descending

// String sort
fruits.sort(); // ['apple', 'banana', 'cherry']
fruits.sort((a, b) => a.localeCompare(b)); // locale-aware
```

### Advanced Sorting

```javascript
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 22 },
];

// Sort by property
users.sort((a, b) => a.age - b.age); // by age ascending

// Multi-criteria sort
const products = [
  { name: 'Laptop', price: 1000, rating: 4.5 },
  { name: 'Phone', price: 500, rating: 4.2 },
  { name: 'Tablet', price: 500, rating: 4.7 },
];

products.sort((a, b) => {
  // First by price ascending, then by rating descending
  if (a.price !== b.price) {
    return a.price - b.price;
  }
  return b.rating - a.rating;
});
```

### Reversing

```javascript
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1] - mutates original

// Non-mutating reverse
const reversed = [...arr].reverse();
const reversed2 = arr.slice().reverse();
```

## Array Testing

### Validation Methods

```javascript
const numbers = [2, 4, 6, 8, 10];
const mixed = [1, 2, 'three', 4];

// every - all elements pass test
numbers.every(n => n % 2 === 0); // true
mixed.every(n => typeof n === 'number'); // false

// some - at least one element passes test
mixed.some(n => typeof n === 'string'); // true

// Array.isArray - check if value is array
Array.isArray([1, 2, 3]); // true
Array.isArray('not array'); // false
Array.isArray({ length: 0 }); // false
```

### Content Validation

```javascript
const validateArray = (arr, validator) => arr.every(validator);

const allNumbers = validateArray([1, 2, 3], n => typeof n === 'number');
const allPositive = validateArray([1, 2, -3], n => n > 0);

// Complex validation
const users = [
  { id: 1, name: 'John', email: 'john@test.com' },
  { id: 2, name: 'Jane', email: 'invalid-email' },
];

const isValidUser = user => user.id && typeof user.name === 'string' && user.email.includes('@');

const allValid = users.every(isValidUser); // false
```

## Reduction Methods

### Basic Reduce

```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// Product
const product = numbers.reduce((acc, curr) => acc * curr, 1); // 120

// Max value
const max = numbers.reduce((acc, curr) => Math.max(acc, curr), -Infinity); // 5

// Flatten array
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []); // [1, 2, 3, 4, 5]
```

### Advanced Reduction Patterns

```javascript
const orders = [
  { product: 'Laptop', price: 1000, quantity: 2 },
  { product: 'Phone', price: 500, quantity: 3 },
  { product: 'Tablet', price: 300, quantity: 1 },
];

// Group by
const groupedByPrice = orders.reduce((acc, order) => {
  const range = order.price >= 500 ? 'expensive' : 'affordable';
  if (!acc[range]) acc[range] = [];
  acc[range].push(order);
  return acc;
}, {});

// Statistics
const stats = numbers.reduce(
  (acc, curr, index) => {
    acc.sum += curr;
    acc.min = Math.min(acc.min, curr);
    acc.max = Math.max(acc.max, curr);
    if (index === numbers.length - 1) {
      acc.average = acc.sum / numbers.length;
    }
    return acc;
  },
  { sum: 0, min: Infinity, max: -Infinity, average: 0 }
);

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { apple: 3, banana: 2, orange: 1 }
```

## Multi-dimensional Arrays

### Creation and Access

```javascript
// 2D arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Access
matrix[0][1]; // 2
matrix[2][2]; // 9

// Creation patterns
const createMatrix = (rows, cols, fill = 0) =>
  Array(rows)
    .fill()
    .map(() => Array(cols).fill(fill));

const identityMatrix = size =>
  Array(size)
    .fill()
    .map((_, i) =>
      Array(size)
        .fill()
        .map((_, j) => (i === j ? 1 : 0))
    );
```

### Operations on Multi-dimensional Arrays

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Flatten
const flat = matrix.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Transpose
const transpose = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
// [[1,4,7], [2,5,8], [3,6,9]]

// Matrix operations
const matrixSum = (a, b) => a.map((row, i) => row.map((val, j) => val + b[i][j]));

// Deep operations
const deepMap = (arr, fn) =>
  arr.map((item, index) => (Array.isArray(item) ? deepMap(item, fn) : fn(item, index)));
```

## Array Performance

### Time Complexity

```javascript
// O(1) - Constant time
arr[i]; // Access by index
arr.push(); // Add to end
arr.pop(); // Remove from end

// O(n) - Linear time
arr.unshift(); // Add to beginning
arr.shift(); // Remove from beginning
arr.splice(); // Add/remove from middle
arr.concat(); // Concatenate
arr.slice(); // Slice
arr.indexOf(); // Search

// O(n log n) - Linearithmic time
arr.sort(); // Sort

// Performance tips:

// Use objects for frequent lookups
const frequentLookup = ['id1', 'id2', 'id3'];
const lookupSet = new Set(frequentLookup); // O(1) lookup

// Pre-allocate arrays when size is known
const knownSize = Array(1000); // Better than pushing 1000 times

// Use for loops for performance-critical code
for (let i = 0; i < largeArray.length; i++) {
  // Faster than forEach for very large arrays
}
```

### Memory Considerations

```javascript
// Shallow vs deep copies
const original = [{ id: 1 }, { id: 2 }];
const shallowCopy = [...original]; // Objects are shared!
const deepCopy = JSON.parse(JSON.stringify(original)); // All new objects

// Sparse arrays
const sparse = [1, , , 4]; // Holes in array
sparse.length; // 4
sparse[1]; // undefined

// Avoid array-like objects confusion
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
Array.from(arrayLike); // Convert to real array
[...arrayLike]; // Error - not iterable
```

## Common Patterns

### Data Transformation Pipelines

```javascript
const processData = data => {
  return data
    .filter(item => item.active && item.value > 0) // Filter valid items
    .map(item => ({
      // Transform structure
      ...item,
      calculated: item.value * item.multiplier,
      timestamp: new Date(item.date),
    }))
    .sort((a, b) => b.calculated - a.calculated) // Sort descending
    .slice(0, 10) // Take top 10
    .reduce((acc, item, index) => {
      // Add rankings
      acc[item.id] = { ...item, rank: index + 1 };
      return acc;
    }, {});
};
```

### Utility Functions

```javascript
// Array utilities library
const ArrayUtils = {
  // Chunk array
  chunk: (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    ),

  // Intersection
  intersection: (a, b) => a.filter(x => b.includes(x)),

  // Difference
  difference: (a, b) => a.filter(x => !b.includes(x)),

  // Union
  union: (a, b) => [...new Set([...a, ...b])],

  // Remove falsy values
  compact: arr => arr.filter(Boolean),

  // Sample random element
  sample: arr => arr[Math.floor(Math.random() * arr.length)],

  // Shuffle (Fisher-Yates)
  shuffle: arr => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
};

// Usage examples
ArrayUtils.chunk([1, 2, 3, 4, 5], 2); // [[1,2], [3,4], [5]]
ArrayUtils.intersection([1, 2, 3], [2, 3, 4]); // [2,3]
ArrayUtils.compact([0, 1, false, 2, '', 3]); // [1,2,3]
```

### Modern JavaScript Patterns

```javascript
// Destructuring arrays
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]

// Swapping variables
let a = 1,
  b = 2;
[a, b] = [b, a]; // a=2, b=1

// Function parameters
const config = ({ url, method = 'GET', headers = [] }) => {
  // Use destructured parameters
};

// Optional chaining with arrays
const safeAccess = (arr, index) => arr?.[index] ?? 'default';

// Using with Promises
const results = await Promise.all(arrayOfPromises);
const settled = await Promise.allSettled(arrayOfPromises);
```

This comprehensive guide covers virtually everything you need to know about JavaScript arrays.
