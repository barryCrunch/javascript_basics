// continue.js
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// Without Continue
for (let i = 0; i < cities.length; i++) {
    cities[i] === null ? "" : console.log(cities[i]);
};

//With Continue

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === null) {
        continue;
    }
    console.log(cities[i]);

};