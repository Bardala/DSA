const map = new Map();
map.set('a', 3)
map.set('b', 2)

console.log(map.get('a'))
console.log(map.size)

console.log(map.has('a'))
map.delete('a')
console.log(map.has('a'))

for (let key of map.keys()) console.log(key)

for (let val of map.values()) console.log(val)

for (let [key, val] of map.entries()) console.log(key, val)

// Convert map into array
const maparr = Array.from(map)
console.log(maparr)

// convert str into array
const strarr = Array.from('hello')
console.log(strarr)


/** *Using Plain Object */
const obj = {}
obj['t'] = 1
obj['f'] = 2

console.log('Get value: ', obj['f'])
console.log("Check for a key: ", 'f' in obj)
delete obj['f']

const size = Object.keys(obj).length
console.log('Size of the map from plain object', Object.keys(obj).length)


// Iterat over an object
for (let key in obj)
    console.log('key: ', key, 'value: ', obj[key])

console.log("Convert object to Array", Object.entries(obj))

// Clearing the object
for (let key in obj) 
    delete obj[key]