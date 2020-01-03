// internationalization2.js

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

const extractLanguage = (locale) => {
  return locale.split('_')[0];
};

const extractRegion = (locale) => {
  return locale.split('_')[1].split('.')[0];
}; 


const localGreet = (locale) => {
  let region = extractRegion(locale);

  switch(region){
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(extractLanguage(locale));
  }
  
};

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'