const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  const filter = species.find((specie) => specie.name === animal.specie).residents
    .filter((resident) => resident.sex === animal.sex).length;
  return filter;
}

module.exports = countAnimals;
