// Add elements
// `push` will append data to the end of array
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// `unshift` acts like `push` but adds element to beginning of array.
friends.unshift('John');
console.log(friends);

// Remove elements
// `pop` removes last element
friends.pop(); 
const popped = friends.pop();
console.log(popped);
console.log(friends);

// `shift` removes first element
friends.shift();
console.log(friends);