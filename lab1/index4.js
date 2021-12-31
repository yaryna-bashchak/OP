const mas = [7, 'apple', false, -31, [true, 4], 'pear', 'cherry', false, 56, 72, 90, -6];
let obj = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0
}
for (element of mas) {
  obj[typeof element]++;
}
console.dir(obj);

for (key in obj){
  delete obj[key];
}

for (element of mas) {
  if (!obj.hasOwnProperty(typeof element)) {
    obj[typeof element] = 1;
  } else {
    obj[typeof element]++;
  }
}

console.dir(obj);