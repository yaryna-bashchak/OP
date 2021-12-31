//1
const iterate = (object, callback) => {
  for (const key of Object.keys(object)) {
    callback(key, object[key], object);
  };
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});

//2
const store = value => {
  const getValue = () => value;
  return getValue;
}

const read = store(5);
const value = read();
console.log(value);

//3
const contract = (fn, ...types) => {
  const lastType = types.pop()
  const checkArgs = (...args) => {
    for (const i in args) {
      const arg = args[i];
      const type = types[i];
      if (typeof arg !== typeof type())
        throw TypeError("Type of args is not correct");
    }

    const result = fn(...args);
    if (typeof result !== typeof lastType())
      throw TypeError("Type of result in not correct");
    return result;
  }
  return checkArgs;
}

const add = (a, fn) => fn(a);
const addNumbers = contract(add, Number, Function, String);
const res = addNumbers(2, (x) => 2 * x + 'a');
console.dir(res);
