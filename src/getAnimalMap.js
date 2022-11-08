const { species } = require('../data/zoo_data');

const getOnlyAnimals = () => species.reduce((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  acc[curr.location].push(curr.name);
  return acc;
}, {});

const getAnimalsByName = () => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }
  const animalName = { [specie.name]: specie.residents.map((resident) => resident.name) };
  acc[specie.location].push(animalName);
  return acc;
}, {});

const getAnimalsByNameSorted = () => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }
  const animalName = specie.residents.map((resident) => resident.name);
  const objeto = {
    [specie.name]: animalName.sort(),
  };
  acc[specie.location].push(objeto);
  return acc;
}, {});

const filterSex = (sex) => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }
  const handleFilterSex = specie.residents.filter((resident) => resident.sex === sex)
    .map((resident) => resident.name);
  const objeto = {
    [specie.name]: handleFilterSex,
  };
  acc[specie.location].push(objeto);
  return acc;
}, {});

const sortSex = (sex) => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }
  const handleFilterSex = specie.residents.filter((resident) => resident.sex === sex)
    .map((resident) => resident.name);
  const objeto = {
    [specie.name]: handleFilterSex.sort(),
  };
  acc[specie.location].push(objeto);
  return acc;
}, {});

const handleEverything = (options) => {
  if (options.sex && options.sorted) return sortSex(options.sex);
  if (options.sorted) return getAnimalsByNameSorted();
  if (options.sex) return filterSex(options.sex);
  return getAnimalsByName();
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return getOnlyAnimals();
  return handleEverything(options);
}

module.exports = getAnimalMap;
