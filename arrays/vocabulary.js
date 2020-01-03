// vocabulary.js

const iterate = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array[i].length; k++) {
      console.log(array[i][k]);
    }
  }
};

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

iterate(vocabulary);
