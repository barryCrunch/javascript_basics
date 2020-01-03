// blank_v1.js

const isBlank = (string) => {
  return string ? false : true;
};

console.log(isBlank('mars'));
console.log(isBlank('   '));
console.log(isBlank(''));