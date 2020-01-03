// filter.js

const count = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 100) {
      count++;
    }
  }
  return count;
};

let scores = [96, 47, 113, 89, 100, 102];

console.log(count(scores));