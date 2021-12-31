function inc(num){
  num.a *= num.a
}
const obj = { a: 10 };
inc(obj);
console.dir(obj);