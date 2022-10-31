const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const speciesRequired = species.filter((specie) => ids.includes(specie.id));
  return speciesRequired;
}

module.exports = getSpeciesByIds;

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));
