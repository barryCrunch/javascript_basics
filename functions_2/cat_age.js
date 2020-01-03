// cat_age.js

const catAge = (humanAge) => {
  if (humanAge == 1) {
    return 15;
  } else if (humanAge === 2) {
    return 15 + 9;
  } else {
    return 15 + 9 + ((humanAge-2)*4);
  }
};


console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
    
  

