const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeeRequired = employees.find((employee) => employee.id === id);
  const firstAnimalId = employeeRequired.responsibleFor[0];
  const animalSpecie = species.find((specie) => specie.id === firstAnimalId).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  const returnAnimalArray = Object.values(animalSpecie);
  return returnAnimalArray;
};

module.exports = getOldestFromFirstSpecies;
