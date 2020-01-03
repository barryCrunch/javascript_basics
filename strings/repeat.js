// repeat.js

const repeat = (num, string) => {
  let repeatString = "";
  for (let i = 0; i < num; i++) {
    repeatString += string;
  }
  console.log(repeatString);
};

repeat(3, 'ha');          