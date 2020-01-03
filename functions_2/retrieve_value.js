// retrieve_value.js

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
}

console.log(student.courses); // ['biology', 'algebra', 'composition', 'ceramics']
console.log(student.locker); //undefied

console.log(jane['location']['country']); // Denmark