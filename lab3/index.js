//random(min, max)
const random = (min = 0, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(random(8, 9));

//generateKey()
const generateKey = (length, characters) => {
  const symbols = characters.split('');
  let key = '';
  for (let i = 0; i < length; i++) {
    key += symbols[random(0, characters.length)];
  }
  return key;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));

//IP адреса
//1
const ip = '127.0.0.1';
let result = 0;
let ipSplited = ip.split('.').map(element => +element);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3 - i; j++) {
    ipSplited[i] <<= 8;
  }
  result += ipSplited[i];
}
console.log(result);

//2 reduce
result = 0;
ipSplited = ip.split('.').map(element => +element);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3 - i; j++) {
    ipSplited[i] <<= 8;
  }
}
result = ipSplited.reduce((elem1, elem2) => elem1 + elem2);
console.log(result);

//iface
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  m4: 4,
};

const keys = [];
for (const key in iface) {
  if (typeof iface[key] === 'function') {
    keys.push([key, iface[key].length]);
  }
}
console.log(keys);
