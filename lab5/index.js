

const calculate = (value, fn) => fn(value);

const seq = (...args) => nextPar =>{
  args.push(nextPar);
  if (typeof nextPar === 'function'){
    return seq(args);  
  }else{
    const result = args.flat(Infinity).reverse().reduce(calculate);
    return result;
  }
} 
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));

//2
const array = () => {
  let mas = [];
  const f = i => {
    return mas[i] 
  }
  f.push = elem => {
    mas.push(elem);
    return elem;
  } 
  f.pop = () => {
    const elem = mas.pop();
    return elem;
  }
  return f;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined