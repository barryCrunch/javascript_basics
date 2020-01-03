// nested_array.js

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let nestedArray = Object.keys(person).map(prop => [prop, person[prop]]);
console.log(nestedArray);

let otherNestedArray = Object.entries(person);
console.log(otherNestedArray);