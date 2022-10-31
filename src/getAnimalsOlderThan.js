const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieType = species.find((specie) => specie.name === animal);
  return specieType.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;

// console.log(getAnimalsOlderThan('lions', 12));
