// local_part_one.js
let extractLanguage = (locale) => {
  return locale.split('_')[0];
};

let extractRegion = (locale) => {
  return locale.split('_')[1].split('.')[0];
} 

console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('en_GB.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));

console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));