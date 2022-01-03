//1
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

process.on('uncaughtException', (err) => {
  console.log('on uncaughtException: ' + err.message);
  process.exit(1);
});

const pipe = (...fns) => {
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') throw new TypeError(`${fns[i]} is not a function`);
  }
  const calculate = (x) => {
    let res = x;
    fns.unshift(x);
    res = fns.reduce((value, fn) => fn(value));
    return res;
  }
  return calculate;
}

console.log(pipe(inc, twice, cube)(5));
console.log(pipe(inc, 9, cube));
