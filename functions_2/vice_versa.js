let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person = {};

nestedArray.forEach(prop => person[prop[0]] = prop[1]);
console.log(person);