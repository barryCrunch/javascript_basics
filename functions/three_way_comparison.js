// three_way_comparison.js

const compareByLength = (stringOne, stringTwo) => {
  if (stringOne.length < stringTwo.length) {
    return -1;
  } else if (stringTwo.length < stringOne.length) {
    return 1;
  } else {
    return 0;
  }
};


console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0