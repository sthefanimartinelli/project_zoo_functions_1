const { prices } = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const countEntrants = (entrants) => {
  const objEntrants = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      objEntrants.child += 1;
    } if (entrant.age >= 18 && entrant.age < 50) {
      objEntrants.adult += 1;
    } if (entrant.age >= 50) {
      objEntrants.senior += 1;
    }
  });
  return objEntrants;
};

// console.log(countEntrants(entrants));

// console.log(prices);

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalPeople = countEntrants(entrants);
  const totalValue = totalPeople.adult * prices.adult
    + totalPeople.senior * prices.senior + totalPeople.child * prices.child;
  return totalValue;
};

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
