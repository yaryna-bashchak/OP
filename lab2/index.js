// Идентификаторы
const myName = 'Yaryna';
const yearOfBirth = 2003;
const printHello = (name) => console.log(`Hello, ${name}!`);
printHello(myName);

// Циклы
const range = (start, end) => {
  const interval = [];
  for (let i = start; i < end + 1; i++) {
    interval.push(i);
  }
  return interval;
};
console.log(range(15, 30));

const rangeOdd = (start, end) => {
  const odd = [];
  let i;
  (start % 2 == 1) ? i = start: i = start + 1;
  for (i; i < end + 1; i += 2) {
    odd.push(i);
  }
  return odd;
};
console.log(rangeOdd(15, 30));

// Функции
const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => square(x) * x;
const calculate = () => {
  const calculation = [];
  for (let i = 0; i < 10; i++) {
    calculation.push(average(square(i), cube(i)));
  }
  return calculation;
};
console.log(calculate());

// Объекты

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };

  obj1.name = 'Aurelius';
  obj2.name = 'Aurelius';

  obj2 = { name: 'Marcus Aurelius' };
  return obj1;
};
console.log(fn());

const createUser = (name, city) => {
  const user = { name, city };
  return user;
};
console.log(createUser('Marcus Aurelius', 'Roma'));

// Коллекции
Array.prototype.addPerson = function(name, phone){
  const person = { name, phone };
  this.push(person);  
}

const phonebook = [];
phonebook.addPerson('Benedict', '+380991234567');
phonebook.addPerson('Steven', '+380951234567');
phonebook.addPerson('Larry', '+380501234567');
phonebook.addPerson('Daniel', '+380661234567');
phonebook.addPerson('Martin', '+380931234567');

const findPhoneByName = name => {
  for (person of phonebook) {
    if (person.name === name){
      return person.phone;
    }
  }
  return 'Name is not found in the phonebook'
}
console.log(findPhoneByName('Daniel'));

// findPhoneByName2()
const fromArrayToObject = array => {
  let persons = {};
  for (const person of array){
    persons[person.name] = person.phone;
  }
  return persons;
}
const persons = fromArrayToObject(phonebook);

const findPhoneByName2 = name => {
  for (const key in persons){
    if (key === name){
      return persons[key];
    }
  }
  return 'Name is not found in the phonebook'
}
console.log(findPhoneByName2('Daniel'));