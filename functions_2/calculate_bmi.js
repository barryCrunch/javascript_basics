// calculate_bmi.js

const calculateBMI = (height, weight) => (weight / ((height/100) ** 2)).toFixed(2);


console.log(calculateBMI(180,80));