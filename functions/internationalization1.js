// internationalization1.js

const greet = (code) => {
  const greeting = {
    en: 'Hi!',
    fr: 'Salut!',
    pt: 'Ola!',
    de: 'Hallo!',
    sv: 'Hej!',
    af: 'Haai!',
  };

  return greeting[code];
};


console.log(greet('en'));
console.log(greet('fr'));
console.log(greet('pt'));
console.log(greet('de'));
console.log(greet('sv'));
console.log(greet('af'));
