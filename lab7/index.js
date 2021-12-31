const { indexOf, range } = require("lodash");

//1
const removeElement = (array, item) => {
  const i = array.indexOf(item);
  if (i !== -1) {
    array.splice(i, 1);
  }
};

let array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 4);
console.log(array);

array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima');
removeElement(array, 'Berlin');
console.log(array);

//2
const removeElements = (array, ...args) =>{
  for (const item of args) {
    const i = array.indexOf(item);
    if (i !== -1) {
      array.splice(i, 1);
    }
  }
};

array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

//3
const unique = array => {
  let lastI = null;
  for (const i in array) {
    const item = array[i];
    lastI = array.lastIndexOf(item);
    while (lastI > i) {
      array.splice(lastI, 1);
      lastI = array.lastIndexOf(item, lastI - 1);
    }
  }
  return array;
}

const result = unique([2, 1, 1, 1, 1, 3, 2, 4]);
console.log(result);
 
//4
const difference = (array1, array2) => {
  for (const elem of array2) {
    let i = array1.indexOf(elem)
    while (i > -1) {
      array1.splice(i, 1);
      i = array1.indexOf(elem, i)
    }
  }
  return array1;
}

const array1 = [7, -2, 0, 0, 10, 5, 0];
const array2 = [0, 1, 10];
console.log(difference(array1, array2));