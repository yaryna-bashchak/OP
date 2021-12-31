const sum1 = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++)
    sum += args[i];
  return sum;
}

const sum2 = (...args) => {
  let sum = 0;
  for (let arg of args)
    sum += arg;
  return sum;
}

const sum3 = (...args) => {
  let sum = 0;
  let i = 0;
  while (i < args.length)
    {
      sum += args[i];
      i++;
    }
  return sum;
}

const sum4 = (...args) => {
  let sum = 0;
  if (args.length > 0) {
    let i = 0;
    do {
        sum += args[i];
        i++;
      } while (i < args.length)
  }
  return sum;
}

const sum5 = (...args) => {
  let result = 0;
  if (args.length > 0){
    const sum = (acc, val) => acc + val;
    result = args.reduce(sum);
  }
  return result;
}

const a = sum1(1, 2, 3); 
const b = sum2(0);
const c = sum3();
const d = sum4(1, 1, -1);
const e = sum5(10, -1, -1, -1);

console.log(a, b, c, d, e);

//6
const max2 = (a, b) => (a > b) ? a : b;
const max = mas => {
  let result = mas[0][0];
  for (let row of mas){
    let maxInRow = row.reduce(max2);
    result = (maxInRow > result) ? maxInRow : result;
  }
  return result;
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

//7
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
const ages = persons => {
  let result = {};
  for (let person in persons){
    let age = persons[person]["died"] - persons[person]["born"];
    result[person] = age;
  }
  return result;
}
console.log(ages(persons));